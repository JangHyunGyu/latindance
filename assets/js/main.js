const docLang = (document.documentElement.lang || "en").toLowerCase();
const LOCALE = docLang.startsWith("ko") ? "ko" : "en";

const STRINGS = {
  ko: {
    regionsAll: "전국",
    count: (n) => `총 ${n}곳이 검색되었습니다.`,
    countEmpty: "조건에 맞는 장소를 찾지 못했습니다.",
    emptyMessage: "검색어 또는 필터를 바꿔 다시 시도해 주세요.",
    styles: {
      salsa: "살사",
      bachata: "바차타",
      kizomba: "키좀바",
      zouk: "주크",
      linedance: "라인댄스",
      brazilianjuke: "브라질리언 주크",
      bachatajuke: "바차주크"
    },
    linkLabels: {
      homepage: "공식 홈페이지",
      website: "당근모임",
      cafe: "네이버 카페",
      instagram: "인스타그램",
  instagramBachazouk: "인스타그램(바차주크)",
      map: "카카오맵",
      band: "네이버 밴드",
      facebook: "페이스북",
      youtube: "유튜브",
      store: "네이버 스토어",
      blog: "네이버 블로그",
  kakaotalk: "카카오톡",
  threads: "Threads",
  linktree: "Linktree"
    },
    scrollTopLabel: "맨 위로",
    scrollTopTitle: "맨 위로 이동"
  },
  en: {
    regionsAll: "All regions",
    count: (n) => `${n} communities listed.`,
    countEmpty: "No communities matched your filters.",
    emptyMessage: "Try adjusting the filters or search keywords.",
    styles: {
      salsa: "Salsa",
      bachata: "Bachata",
      kizomba: "Kizomba",
  zouk: "Zouk",
      linedance: "Line Dance",
      brazilianjuke: "Brazilian Zouk",
      bachatajuke: "Bachata Zouk"
    },
    linkLabels: {
      homepage: "Official Website",
      website: "Karrot Group",
      cafe: "Naver Cafe",
      instagram: "Instagram",
  instagramBachazouk: "Instagram (Bachazouk)",
      map: "Map",
      band: "Naver Band",
      facebook: "Facebook",
      youtube: "YouTube",
      store: "Naver Store",
      blog: "Naver Blog",
  kakaotalk: "KakaoTalk",
  threads: "Threads",
  linktree: "Linktree"
    },
    scrollTopLabel: "Back to top",
    scrollTopTitle: "Scroll back to top"
  }
}[LOCALE];

const getGlobalObject = () => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }

  if (typeof window !== "undefined") {
    return window;
  }

  return this;
};

const globalObject = getGlobalObject();

let REGION_ORDER = globalObject?.REGION_ORDER;
if (typeof module !== "undefined" && module.exports && !REGION_ORDER) {
  try {
    REGION_ORDER = require("./constants").REGION_ORDER;
  } catch (error) {
    REGION_ORDER = undefined;
  }
}
if (!REGION_ORDER) {
  REGION_ORDER = { ko: [], en: [] };
}

let FilterUtils = globalObject?.FilterUtils;
if (typeof module !== "undefined" && module.exports && !FilterUtils) {
  try {
    FilterUtils = require("./utils/filter-utils");
  } catch (error) {
    FilterUtils = undefined;
  }
}

if (!FilterUtils) {
  throw new Error("Filter utilities module is required for main.js.");
}

const {
  normalizeRegionValue,
  matchesFilters,
  formatCount,
  isCityRepeatedInAddress,
  shuffleArray
} = FilterUtils;

// VENUES data is defined in assets/js/venues.js

const regionSelect = document.querySelector("[data-filter-region]");
const searchInput = document.querySelector("[data-filter-search]");
const filterForm = document.querySelector(".filter-form");
const resultsContainer = document.getElementById("venue-results");
const countNode = document.querySelector("[data-result-count]");

const populateRegions = () => {
  if (!regionSelect) {
    return;
  }

  const uniqueRegions = Array.from(new Set(VENUES.map((venue) => venue.region[LOCALE]))).sort(
    (a, b) => {
      const order = REGION_ORDER[LOCALE] || [];
      const indexA = order.indexOf(a);
      const indexB = order.indexOf(b);

      if (indexA === -1 && indexB === -1) {
        return a.localeCompare(b);
      }

      if (indexA === -1) {
        return 1;
      }

      if (indexB === -1) {
        return -1;
      }

      return indexA - indexB;
    }
  );

  const fragment = document.createDocumentFragment();
  uniqueRegions.forEach((region) => {
    const option = document.createElement("option");
    option.value = region;
    option.textContent = region;
    fragment.appendChild(option);
  });

  regionSelect.appendChild(fragment);
  
  // 브라우저가 뒤로가기로 값을 복원했는지 확인
  // 복원되지 않았을 때만 기본값 설정
  if (!regionSelect.value || regionSelect.value === "") {
    regionSelect.value = "all";
  }
};

const createTag = (style) => {
  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = STRINGS.styles[style] || style;
  return tag;
};

const resolveLinkLabel = (descriptor) => {
  if (descriptor.label) {
    if (typeof descriptor.label === "string") {
      return descriptor.label;
    }
    if (typeof descriptor.label === "object") {
      return descriptor.label[LOCALE] || descriptor.label.en || descriptor.label.ko;
    }
  }
  return STRINGS.linkLabels[descriptor.type] || descriptor.type;
};

const createLink = (descriptor, options = {}) => {
  const link = document.createElement("a");
  const variant = options.variant === "default" ? "default" : "chip";
  link.className = "venue-card__link";
  if (variant === "chip") {
    link.classList.add("venue-card__link--chip");
  }
  link.href = descriptor.url;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = resolveLinkLabel(descriptor);
  return link;
};

const renderVenues = (venues) => {
  if (!resultsContainer) {
    return;
  }

  resultsContainer.innerHTML = "";

  if (!venues.length) {
    const empty = document.createElement("p");
    empty.className = "venue-empty";
    empty.textContent = STRINGS.emptyMessage;
    resultsContainer.appendChild(empty);
    return;
  }

  const fragment = document.createDocumentFragment();
  venues.forEach((venue) => {
    const card = document.createElement("article");
    card.className = "venue-card";
    card.id = venue.id;
    card.setAttribute("role", "listitem");

    const name = document.createElement("h3");
    name.className = "venue-card__name";
    name.textContent = venue.name[LOCALE];

    const meta = document.createElement("p");
    meta.className = "venue-card__meta";
    const cityLabel = venue.city?.[LOCALE] || "";
    const addressLabel = venue.address?.[LOCALE];
    if (addressLabel && isCityRepeatedInAddress(cityLabel, addressLabel)) {
      meta.textContent = addressLabel;
    } else if (addressLabel && cityLabel) {
      meta.textContent = `${cityLabel}\n${addressLabel}`;
    } else {
      meta.textContent = cityLabel || addressLabel || "";
    }

    const summary = document.createElement("p");
    summary.className = "venue-card__summary";
    summary.textContent = venue.summary[LOCALE];

    let scheduleNode = null;
    if (venue.schedule?.[LOCALE]) {
      scheduleNode = document.createElement("p");
      scheduleNode.className = "venue-card__schedule";
      scheduleNode.textContent = venue.schedule[LOCALE];
    }

    const tags = document.createElement("div");
    tags.className = "venue-card__tags";
    venue.styles.forEach((style) => {
      tags.appendChild(createTag(style));
    });

    const contentFragment = document.createDocumentFragment();

    if (venue.image) {
      const media = document.createElement("figure");
      media.className = "venue-card__media";

      const img = document.createElement("img");
      img.className = "venue-card__image";
      img.src = venue.image;
      img.alt = venue.imageAlt?.[LOCALE] || venue.name[LOCALE];
      img.loading = "lazy";
      if (venue.imageFit === "contain") {
        img.classList.add("venue-card__image--contain");
      }

      media.appendChild(img);
      contentFragment.appendChild(media);
    }

    contentFragment.append(name, meta, summary);
    if (scheduleNode) {
      contentFragment.appendChild(scheduleNode);
    }
    contentFragment.appendChild(tags);

    if (Array.isArray(venue.links) && venue.links.length) {
      const links = document.createElement("div");
      links.className = "venue-card__links";
      const linkVariant = venue.linkDisplay === "buttons" ? "default" : "chip";
      if (linkVariant === "chip") {
        links.classList.add("venue-card__links--chips");
      }
      venue.links.forEach((descriptor) => {
        links.appendChild(createLink(descriptor, { variant: linkVariant }));
      });
      contentFragment.appendChild(links);
      card.appendChild(contentFragment);
    } else {
      card.appendChild(contentFragment);
    }
    fragment.appendChild(card);
  });

  resultsContainer.appendChild(fragment);
};

const applyFilters = () => {
  const regionValue = normalizeRegionValue(regionSelect?.value || "all", STRINGS.regionsAll);
  const searchValue = (searchInput?.value || "").trim().toLowerCase();

  const filtered = VENUES.filter((venue) =>
    matchesFilters(
      venue,
      {
        region: regionValue,
        search: searchValue
      },
      LOCALE
    )
  );

  shuffleArray(filtered);

  if (countNode) {
    countNode.textContent = formatCount(filtered.length, STRINGS);
  }

  renderVenues(filtered);
};

const registerEvents = () => {
  regionSelect?.addEventListener("change", applyFilters);

  if (searchInput) {
    let debounceId = null;
    searchInput.addEventListener("input", () => {
      if (debounceId) {
        window.clearTimeout(debounceId);
      }
      debounceId = window.setTimeout(applyFilters, 180);
    });
  }

  filterForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (searchInput) {
      searchInput.blur();
    }
    applyFilters();
  });
};

populateRegions();
registerEvents();

// 초기 필터 적용 - 브라우저가 폼 값을 복원할 시간을 줌
setTimeout(applyFilters, 0);

// 뒤로가기로 페이지 복원 시 필터 재적용
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    // 페이지가 bfcache에서 복원된 경우
    setTimeout(applyFilters, 0);
  }
});

// 맨위로 가기 버튼
const initScrollTop = () => {
  const button = document.querySelector('.scroll-top');
  if (!button) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const threshold = 200;
  let ticking = false;

  const updateVisibility = () => {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    if (scrollY > threshold) {
      button.classList.add("is-visible");
    } else {
      button.classList.remove("is-visible");
    }
    ticking = false;
  };

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateVisibility);
      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  updateVisibility();

  // 터치 디바이스용 hover 효과
  button.addEventListener("touchstart", () => {
    button.style.background = 'rgba(255, 124, 79, 0.25)';
    button.style.borderColor = 'rgba(255, 124, 79, 0.4)';
    button.style.boxShadow = '0 6px 20px rgba(255, 124, 79, 0.3)';
    button.style.color = '#ff7c4f';
  }, { passive: true });

  button.addEventListener("touchend", () => {
    button.style.background = '';
    button.style.borderColor = '';
    button.style.boxShadow = '';
    button.style.color = '';
  }, { passive: true });

  button.addEventListener("click", (e) => {
    e.preventDefault();
    
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion.matches ? "auto" : "smooth"
    });
  });
};

initScrollTop();
