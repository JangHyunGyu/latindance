document.addEventListener('DOMContentLoaded', function() {
    setupCustomSelects();
});

function setupCustomSelects() {
    const selects = document.querySelectorAll('.options-grid select');
    
    selects.forEach(select => {
        // Check if already initialized
        if (select.nextElementSibling && select.nextElementSibling.classList.contains('custom-select')) {
            return;
        }

        // Hide original select
        select.style.display = 'none';

        // Create custom select structure
        const customSelect = document.createElement('div');
        customSelect.className = 'custom-select';
        
        const trigger = document.createElement('div');
        trigger.className = 'custom-select__trigger';
        
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
        
        select.parentNode.appendChild(customSelect);
        
        // Toggle dropdown
        trigger.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Close other open selects
            document.querySelectorAll('.custom-select').forEach(el => {
                if (el !== customSelect) el.classList.remove('open');
            });
            
            customSelect.classList.toggle('open');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.custom-select')) {
            document.querySelectorAll('.custom-select').forEach(el => el.classList.remove('open'));
        }
    });
}
