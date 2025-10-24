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
      kizomba: "키조바",
      zouk: "줌바·주크"
    },
    linkLabels: {
      website: "공식 사이트",
      cafe: "네이버 카페",
      instagram: "인스타그램",
      map: "카카오맵"
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
      zouk: "Zouk / Zumba"
    },
    linkLabels: {
      website: "Website",
      cafe: "Naver Cafe",
      instagram: "Instagram",
      map: "Map"
    }
  }
}[LOCALE];

const VENUES = [
  {
    id: "daegu-asura",
    name: { ko: "아수라 라틴댄스", en: "Asura Latin Dance Daegu" },
    region: { ko: "대구", en: "Daegu" },
    city: { ko: "대구 중구", en: "Jung-gu, Daegu" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "대구 중구에서 살사와 바차타 수업, 소셜을 운영하는 라틴댄스 커뮤니티입니다.",
      en: "Daegu-based community in Jung-gu offering salsa and bachata classes and socials."
    },
    image: "https://coresos-phinf.pstatic.net/a/352828/1_04aUd018svc1cz5zw2xq05k6_o4ujpe.jpg?type=cover_s276",
    imageAlt: {
      ko: "아수라 라틴댄스 소셜 사진",
      en: "Asura Latin Dance Daegu social photo"
    },
    links: []
  },
  {
    id: "daegu-baya",
    name: { ko: "바야 라틴댄스", en: "Baya Latin Dance" },
    region: { ko: "대구", en: "Daegu" },
    city: { ko: "대구 수성구", en: "Suseong-gu, Daegu" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "바차타와 살사 워크숍을 중심으로 지역 댄서들을 연결하는 대구 수성구 커뮤니티입니다.",
      en: "Community in Suseong-gu connecting dancers through bachata and salsa workshops."
    },
    image:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/465018751_855158120001532_2341445861805686994_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmV4cGVyaW1lbnRhbCJ9&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QEHEoc7SjvGiKwUuYkCMU-emTL_G-jEzsU_GDkl2TXjZK-Si1A6Q-ke5oT7LABn6yo&_nc_ohc=KJVJr_A8NvsQ7kNvwFKe6SA&_nc_gid=rPycsNAR1QVY2ZVttjYO8Q&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfdFgv4iMOpYXFMASGuvurs4qROq1R_Ycblkm-jYtmq7YQ&oe=690188EF&_nc_sid=8b3546",
    imageAlt: {
      ko: "바야 라틴댄스 프로필 이미지",
      en: "Baya Latin Dance profile image"
    },
    links: []
  },
  {
    id: "daegu-salsadrama",
    name: { ko: "살사드라마", en: "SalsaDrama" },
    region: { ko: "대구", en: "Daegu" },
    city: { ko: "대구 남구", en: "Nam-gu, Daegu" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "정기 소셜과 초급 클래스로 아마추어 댄서를 키우는 대구 라틴댄스 스튜디오입니다.",
      en: "Daegu studio nurturing new dancers with regular socials and beginner-friendly classes."
    },
    links: []
  }
];

const regionSelect = document.querySelector("[data-filter-region]");
const searchInput = document.querySelector("[data-filter-search]");
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
    meta.textContent = `${venue.city[LOCALE]}  ${venue.region[LOCALE]}`;

    const summary = document.createElement("p");
    summary.className = "venue-card__summary";
    summary.textContent = venue.summary[LOCALE];

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

    contentFragment.append(name, meta, summary, tags);

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
};

populateRegions();
registerEvents();
applyFilters();
