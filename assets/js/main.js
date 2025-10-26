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
      zouk: "줌바·주크",
      linedance: "라인댄스",
      brazilianjuke: "브라질리언 주크",
      bachatajuke: "바차주크"
    },
    linkLabels: {
      website: "당근모임",
      cafe: "네이버 카페",
      instagram: "인스타그램",
      map: "카카오맵",
      band: "네이버 밴드",
      facebook: "페이스북",
      youtube: "유튜브",
      store: "네이버 스토어",
      blog: "네이버 블로그"
    }
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
      zouk: "Zouk / Zumba",
      linedance: "Line Dance",
      brazilianjuke: "Brazilian Zouk",
      bachatajuke: "Bachata Zouk"
    },
    linkLabels: {
      website: "Karrot Group",
      cafe: "Naver Cafe",
      instagram: "Instagram",
      map: "Map",
      band: "Naver Band",
      facebook: "Facebook",
      youtube: "YouTube",
      store: "Naver Store",
      blog: "Naver Blog"
    }
  }
}[LOCALE];

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
    (a, b) => a.localeCompare(b)
  );

  const fragment = document.createDocumentFragment();
  uniqueRegions.forEach((region) => {
    const option = document.createElement("option");
    option.value = region;
    option.textContent = region;
    fragment.appendChild(option);
  });

  regionSelect.appendChild(fragment);
  regionSelect.value = "all";
};

const normalizeRegionValue = (value) => {
  if (!value) {
    return "all";
  }

  if (value === "all" || value === STRINGS.regionsAll) {
    return "all";
  }

  return value;
};

const matchesFilters = (venue, { region, search }) => {
  if (region && region !== "all" && venue.region[LOCALE] !== region) {
    return false;
  }

  if (search) {
    const target = [
      venue.name[LOCALE],
      venue.region[LOCALE],
      venue.city[LOCALE],
      venue.summary[LOCALE]
    ]
      .join(" ")
      .toLowerCase();
    if (!target.includes(search)) {
      return false;
    }
  }

  return true;
};

const formatCount = (count) => (count === 0 ? STRINGS.countEmpty : STRINGS.count(count));

const isCityRepeatedInAddress = (cityLabel = "", addressLabel = "") => {
  if (!cityLabel || !addressLabel) {
    return false;
  }

  const tokens = cityLabel.split(/\s+/).filter(Boolean);
  if (!tokens.length) {
    return false;
  }

  const lowerAddress = addressLabel.toLowerCase();
  return tokens.every((token) => lowerAddress.includes(token.toLowerCase()));
};

const createTag = (style) => {
  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = STRINGS.styles[style] || style;
  return tag;
};

const createLink = (descriptor) => {
  const link = document.createElement("a");
  link.className = "venue-card__link";
  link.href = descriptor.url;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = STRINGS.linkLabels[descriptor.type] || descriptor.type;
  return link;
};

const shuffleArray = (items) => {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
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
      venue.links.forEach((descriptor) => {
        links.appendChild(createLink(descriptor));
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
  const regionValue = normalizeRegionValue(regionSelect?.value || "all");
  const searchValue = (searchInput?.value || "").trim().toLowerCase();

  const filtered = VENUES.filter((venue) =>
    matchesFilters(venue, {
      region: regionValue,
      search: searchValue
    })
  );

  shuffleArray(filtered);

  if (countNode) {
    countNode.textContent = formatCount(filtered.length);
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
    applyFilters();
  });
};

populateRegions();
registerEvents();
applyFilters();
