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
    id: "seoul-salsaviva",
    name: { ko: "살사비바 홍대", en: "SalsaViva Hongdae" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 마포구 홍대", en: "Hongdae, Mapo-gu" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "2002년부터 운영 중인 대표 살사 스튜디오로 평일 수업과 주말 소셜을 꾸준히 열고 있습니다.",
      en: "Since 2002 this Hongdae studio has offered weekday classes and packed weekend socials."
    },
    links: [
      { type: "website", url: "https://salsaviva.co.kr" },
      { type: "cafe", url: "https://cafe.naver.com/salsaviva" }
    ]
  },
  {
    id: "seoul-clubmambo",
    name: { ko: "클럽 맘보 강남", en: "Club Mambo Gangnam" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 강남구 역삼", en: "Yeoksam, Gangnam-gu" },
    styles: ["salsa", "bachata", "kizomba"],
    summary: {
      ko: "강남역 인근에서 심야 소셜과 라이브 라틴 밴드 공연을 진행하는 전통 살사 클럽입니다.",
      en: "Long-running club near Gangnam Station known for late-night socials and live Latin music."
    },
    links: [
      { type: "website", url: "https://clubmambo.co.kr" },
      { type: "instagram", url: "https://www.instagram.com/clubmambokorea" }
    ]
  },
  {
    id: "seoul-thesalsa",
    name: { ko: "더살사 강남", en: "The Salsa Gangnam" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 강남구 논현", en: "Nonhyeon, Gangnam-gu" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "입문반부터 마스터반까지 세분화된 커리큘럼과 주중 소셜을 운영하는 종합 라틴 스튜디오입니다.",
      en: "Comprehensive studio offering leveled courses and weeknight socials in Nonhyeon."
    },
    links: [
      { type: "website", url: "https://thesalsa.co.kr" },
      { type: "instagram", url: "https://www.instagram.com/thesalsakorea" }
    ]
  },
  {
    id: "seoul-bailamos",
    name: { ko: "바일라모스 성수", en: "Bailamos Seongsu" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 성동구 성수", en: "Seongsu-dong, Seongdong-gu" },
    styles: ["bachata", "salsa"],
    summary: {
      ko: "바차타 기반 커리큘럼과 주말 커뮤니티 소셜을 제공하는 성수동 스튜디오입니다.",
      en: "Seongsu studio focused on bachata fundamentals with curated weekend socials."
    },
    links: [
      { type: "instagram", url: "https://www.instagram.com/bailamos.kr" },
      { type: "map", url: "https://map.kakao.com/?urlX=513593&urlY=1113797&itemId=1769750927" }
    ]
  },
  {
    id: "gyeonggi-suwonsalsa",
    name: { ko: "수원 살사클럽", en: "Suwon Salsa Club" },
    region: { ko: "경기", en: "Gyeonggi" },
    city: { ko: "경기 수원시 영통", en: "Yeongtong, Suwon" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "수원과 화성권 댄서가 모이는 커뮤니티로 평일 저녁 소셜과 무료 체험 클래스를 운영합니다.",
      en: "Community hub for Suwon and Hwaseong dancers with weekday socials and trial classes."
    },
    links: [{ type: "cafe", url: "https://cafe.naver.com/suwonsalsa" }]
  },
  {
    id: "busan-latinbusan",
    name: { ko: "부산 라틴댄스 커뮤니티", en: "Busan Latin Dance" },
    region: { ko: "부산", en: "Busan" },
    city: { ko: "부산 부산진구 서면", en: "Seomyeon, Busanjin-gu" },
    styles: ["salsa", "bachata", "kizomba"],
    summary: {
      ko: "부산 대표 커뮤니티로 해운대 야외 소셜과 시즌별 바차타 워크숍을 진행합니다.",
      en: "Leading Busan crew running beach socials in Haeundae and seasonal bachata workshops."
    },
    links: [
      { type: "cafe", url: "https://cafe.naver.com/latinbusan" },
      { type: "instagram", url: "https://www.instagram.com/busanlatindance" }
    ]
  },
  {
    id: "daegu-latindg",
    name: { ko: "대구 라틴", en: "Daegu Latin" },
    region: { ko: "대구", en: "Daegu" },
    city: { ko: "대구 중구 동성로", en: "Dongseongno, Jung-gu" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "동성로 중심가에서 주간 소셜과 연례 대구 살사 페스티벌을 주최하는 커뮤니티입니다.",
      en: "Downtown Daegu community hosting weekly socials and the annual Daegu Salsa Festival."
    },
    links: [{ type: "cafe", url: "https://cafe.naver.com/dglatin" }]
  },
  {
    id: "daejeon-djlatino",
    name: { ko: "대전 DJ Latino", en: "Daejeon DJ Latino" },
    region: { ko: "대전", en: "Daejeon" },
    city: { ko: "대전 서구 둔산", en: "Dunsan, Seo-gu" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "충청권 최대 라틴 커뮤니티로 격주 소셜과 파티형 워크숍을 꾸준히 열고 있습니다.",
      en: "Largest community in Chungcheong with bi-weekly socials and themed workshop parties."
    },
    links: [{ type: "cafe", url: "https://cafe.naver.com/djlatino" }]
  },
  {
    id: "jeju-latinholic",
    name: { ko: "라틴홀릭 제주", en: "LatinHolic Jeju" },
    region: { ko: "제주", en: "Jeju" },
    city: { ko: "제주 제주시 구좌", en: "Gujwa, Jeju City" },
    styles: ["bachata", "salsa"],
    summary: {
      ko: "제주 섬 곳곳에서 시즌 소셜과 야외 비치 이벤트를 기획하는 라틴 커뮤니티입니다.",
      en: "Island-wide collective hosting seasonal socials and outdoor beach events across Jeju."
    },
    links: [
      { type: "instagram", url: "https://www.instagram.com/latinholic" },
      { type: "cafe", url: "https://blog.naver.com/latinholic" }
    ]
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

    const links = document.createElement("div");
    links.className = "venue-card__links";
    venue.links.forEach((descriptor) => {
      links.appendChild(createLink(descriptor));
    });

    card.append(name, meta, summary, tags, links);
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
