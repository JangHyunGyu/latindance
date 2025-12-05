function init() {
    console.log('Initializing Custom Selects...');
    injectCustomStyles();
    setupCustomSelects();
}

function injectCustomStyles() {
    const styleId = 'custom-select-styles';
    if (document.getElementById(styleId)) return;

    const css = `
        .custom-select {
            position: relative;
            display: block;
            width: 100%;
            margin-top: 5px;
            z-index: 100;
        }
        .custom-select__trigger {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 16px;
            font-size: 1rem;
            font-weight: 500;
            color: #fff;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
            min-height: 52px;
            box-sizing: border-box;
        }
        .custom-select__trigger:hover {
            background: rgba(255, 255, 255, 0.15);
            border-color: rgba(255, 255, 255, 0.4);
        }
        .custom-select.open .custom-select__trigger {
            border-color: #41d1ff;
            background: rgba(255, 255, 255, 0.15);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
        .custom-select__arrow {
            position: relative;
            height: 10px;
            width: 10px;
            margin-left: 10px;
        }
        .custom-select__arrow::before, .custom-select__arrow::after {
            content: "";
            position: absolute;
            bottom: 0px;
            width: 2px;
            height: 100%;
            transition: all 0.3s ease;
            background-color: rgba(255, 255, 255, 0.7);
        }
        .custom-select__arrow::before { left: -2px; transform: rotate(-45deg); }
        .custom-select__arrow::after { left: 4px; transform: rotate(45deg); }
        .custom-select.open .custom-select__arrow::before { transform: rotate(45deg); background-color: #41d1ff; }
        .custom-select.open .custom-select__arrow::after { transform: rotate(-45deg); background-color: #41d1ff; }
        .custom-options {
            position: absolute;
            display: block;
            top: 100%;
            left: 0;
            right: 0;
            border: 1px solid #41d1ff;
            border-top: 0;
            border-bottom-left-radius: 12px;
            border-bottom-right-radius: 12px;
            background: #1e1e24;
            background: rgba(30, 30, 36, 0.98);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            z-index: 1000;
            transform: translateY(-10px);
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .custom-select.open .custom-options {
            opacity: 1;
            visibility: visible;
            pointer-events: all;
            transform: translateY(0);
        }
        .custom-option {
            position: relative;
            display: block;
            padding: 12px 16px;
            font-size: 0.95rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.8);
            cursor: pointer;
            transition: all 0.2s;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .custom-option:last-child { border-bottom: none; }
        .custom-option:hover, .custom-option.selected {
            color: #fff;
            background: rgba(65, 209, 255, 0.1);
            padding-left: 20px;
        }
        .custom-option.selected::after {
            content: '✓';
            position: absolute;
            right: 16px;
            color: #41d1ff;
            font-weight: bold;
        }
    `;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = css;
    document.head.appendChild(style);
    console.log('Injected custom select styles');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function setupCustomSelects() {
    const selects = document.querySelectorAll('.options-grid select');
    
    if (selects.length === 0) {
        console.warn('No selects found in .options-grid');
        return;
    }

    selects.forEach(select => {
        console.log('Found select:', select.id, select);
        
        // Check if already initialized
        if (select.nextElementSibling && select.nextElementSibling.classList.contains('custom-select')) {
            return;
        }

        try {
            // Create custom select structure
            const customSelect = document.createElement('div');
            customSelect.className = 'custom-select';
            
            // FORCE STYLES: Apply critical styles inline to ensure visibility
            customSelect.style.cssText = `
                display: block !important;
                width: 100% !important;
                position: relative !important;
                z-index: 100 !important;
                margin-top: 5px !important;
            `;
            
            const trigger = document.createElement('div');
            trigger.className = 'custom-select__trigger';
            
            // FORCE STYLES: Apply visual styles inline
            trigger.style.cssText = `
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
                min-height: 52px !important;
                padding: 14px 16px !important;
                box-sizing: border-box !important;
                cursor: pointer !important;
                background: rgba(255, 255, 255, 0.1) !important;
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
                border-radius: 12px !important;
                color: #fff !important;
                font-size: 1rem !important;
                font-weight: 500 !important;
            `;
            
            // Initial value
            const selectedOption = select.options[select.selectedIndex];
            trigger.innerHTML = `<span>${selectedOption ? selectedOption.text : ''}</span><div class="custom-select__arrow"></div>`;
            
            const options = document.createElement('div');
            options.className = 'custom-options';
            
            Array.from(select.options).forEach(option => {
                const customOption = document.createElement('div');
                customOption.className = 'custom-option' + (option.selected ? ' selected' : '');
                customOption.dataset.value = option.value;
                customOption.textContent = option.text;
                
                customOption.addEventListener('click', function(e) {
                    e.stopPropagation();
                    
                    // Update trigger text
                    trigger.querySelector('span').textContent = this.textContent;
                    
                    // Update original select value
                    select.value = this.dataset.value;
                    
                    // Trigger change event on original select
                    const event = new Event('change', { bubbles: true });
                    select.dispatchEvent(event);
                    
                    // Update selected class
                    options.querySelectorAll('.custom-option').forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                    
                    // Close dropdown
                    customSelect.classList.remove('open');
                });
                
                options.appendChild(customOption);
            });
            
            customSelect.appendChild(trigger);
            customSelect.appendChild(options);
            
            // Insert custom select after the original select using insertAdjacentElement
            select.insertAdjacentElement('afterend', customSelect);
            console.log('Appended custom select after:', select.id);
            
            // Hide original select only after successful creation
            select.style.display = 'none';
            
            // Toggle dropdown
            trigger.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Close other open selects
                document.querySelectorAll('.custom-select').forEach(el => {
                    if (el !== customSelect) el.classList.remove('open');
                });
                
                customSelect.classList.toggle('open');
            });
        } catch (e) {
            console.error('Error creating custom select:', e);
            select.style.display = ''; // Ensure original is visible on error
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.custom-select')) {
            document.querySelectorAll('.custom-select').forEach(el => el.classList.remove('open'));
        }
    });
}
