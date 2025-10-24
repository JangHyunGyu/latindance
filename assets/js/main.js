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
    name: { ko: "살사비바", en: "SalsaViva Seoul" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 홍대·마포", en: "Hongdae · Mapo" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "2002년에 문을 연 대표 살사 스튜디오로 평일 수업과 주말 소셜을 운영합니다.",
      en: "Flagship salsa studio near Hongdae offering weekday classes and weekend socials since 2002."
    },
    links: [
      { type: "website", url: "https://salsaviva.co.kr" },
      { type: "cafe", url: "https://cafe.naver.com/salsaviva" }
    ]
  },
  {
    id: "seoul-clubmambo",
    name: { ko: "클럽 맘보", en: "Club Mambo" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 강남·역삼", en: "Gangnam · Yeoksam" },
    styles: ["salsa", "bachata", "kizomba"],
    summary: {
      ko: "강남역 인근의 올드스쿨 살사 클럽으로 심야 소셜과 라이브 라틴 음악이 특징입니다.",
      en: "Old-school salsa club close to Gangnam Station, known for late-night socials and live Latin music."
    },
    links: [
      { type: "website", url: "https://clubmambo.co.kr" },
      { type: "instagram", url: "https://www.instagram.com/clubmambokorea" }
    ]
  },
  {
    id: "seoul-bailamos",
    name: { ko: "바일라모스", en: "Bailamos" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 성수", en: "Seongsu" },
    styles: ["bachata", "salsa"],
    summary: {
      ko: "바차타 테크닉 중심 커리큘럼과 소규모 신규 입문 세션을 제공하는 스튜디오입니다.",
      en: "Studio focusing on bachata technique with newcomer onboarding nights and curated socials."
    },
    links: [
      { type: "instagram", url: "https://www.instagram.com/bailamos.kr" },
      { type: "map", url: "https://map.kakao.com/?urlX=513593&urlY=1113797&itemId=1769750927" }
    ]
  },
  {
    id: "gyeonggi-latinplay",
    name: { ko: "라틴플레이 성남", en: "Latin Play Seongnam" },
    region: { ko: "경기", en: "Gyeonggi" },
    city: { ko: "성남 분당", en: "Bundang" },
    styles: ["bachata", "salsa"],
    summary: {
      ko: "분당 지역 대표 커뮤니티로 주말 소셜과 원데이 워크숍을 진행합니다.",
      en: "Leading community in southern Gyeonggi offering weekend socials and one-day workshops near Bundang."
    },
    links: [{ type: "cafe", url: "https://cafe.naver.com/latinplay" }]
  },
  {
    id: "gyeonggi-suwonsalsa",
    name: { ko: "수원 살사클럽", en: "Suwon Salsa Club" },
    region: { ko: "경기", en: "Gyeonggi" },
    city: { ko: "수원 영통", en: "Suwon" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "수원·화성 무대를 잇는 하우스로 평일 저녁 소셜과 무료 체험 클래스를 운영합니다.",
      en: "Hub for Suwon and Hwaseong dancers with weekday evening socials and free beginner trials."
    },
    links: [{ type: "cafe", url: "https://cafe.naver.com/suwonsalsa" }]
  },
  {
    id: "incheon-latinwave",
    name: { ko: "라틴웨이브 인천", en: "Latin Wave Incheon" },
    region: { ko: "인천", en: "Incheon" },
    city: { ko: "인천 송도", en: "Songdo" },
    styles: ["salsa", "bachata", "zouk"],
    summary: {
      ko: "송도 최초의 라틴 스튜디오로 경기 서부권과 연계한 공동 패스를 제공합니다.",
      en: "First Latin studio in Songdo offering combined passes with western Gyeonggi socials."
    },
    links: [{ type: "instagram", url: "https://www.instagram.com/latinwave_incheon" }]
  },
  {
    id: "busan-latinbusan",
    name: { ko: "부산 라틴댄스 커뮤니티", en: "Busan Latin Dance" },
    region: { ko: "부산", en: "Busan" },
    city: { ko: "부산 서면", en: "Seomyeon" },
    styles: ["salsa", "bachata", "kizomba"],
    summary: {
      ko: "부산 대표 커뮤니티로 해운대 야외 소셜과 시즌별 바차타 클래스를 운영합니다.",
      en: "Leading Busan crew running outdoor socials and seasonal bachata classes at Haeundae."
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
    city: { ko: "대구 동성로", en: "Dongseongno" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "대구 도심 중심 커뮤니티로 대구 살사 페스티벌과 주간 소셜을 개최합니다.",
      en: "Central Daegu community hosting the annual Daegu Salsa Festival and weekly socials."
    },
    links: [{ type: "cafe", url: "https://cafe.naver.com/dglatin" }]
  },
  {
    id: "daejeon-djlatino",
    name: { ko: "대전 라틴", en: "Daejeon Latin" },
    region: { ko: "대전", en: "Daejeon" },
    city: { ko: "대전 둔산", en: "Dunsan" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "충청권 최대 규모 커뮤니티로 격주 소셜과 입문 워크숍을 운영합니다.",
      en: "Largest community in the Chungcheong area with bi-weekly socials and starter workshops."
    },
    links: [{ type: "cafe", url: "https://cafe.naver.com/djlatino" }]
  },
  {
    id: "gwangju-latinwave",
    name: { ko: "광주 라틴웨이브", en: "Gwangju Latin Wave" },
    region: { ko: "광주", en: "Gwangju" },
    city: { ko: "광주 상무", en: "Sangmu" },
    styles: ["salsa", "bachata", "zouk"],
    summary: {
      ko: "호남권 상설 스튜디오로 비기너 나이트와 여성 리드 워크숍을 운영합니다.",
      en: "Permanent studio in the Honam region featuring beginner nights and women-lead workshops."
    },
    links: [{ type: "instagram", url: "https://www.instagram.com/gwangju_latinwave" }]
  },
  {
    id: "jeju-latinholic",
    name: { ko: "라틴홀릭 제주", en: "LatinHolic Jeju" },
    region: { ko: "제주", en: "Jeju" },
    city: { ko: "제주 구좌·제주시", en: "Gujwa · Jeju" },
    styles: ["bachata", "salsa"],
    summary: {
      ko: "제주 전역에서 시즌 소셜과 야외 비치 이벤트를 주최합니다.",
      en: "Seasonal socials and pop-up classes across Jeju, including outdoor beach events."
    },
    links: [
      { type: "instagram", url: "https://www.instagram.com/latinholic" },
      { type: "cafe", url: "https://blog.naver.com/latinholic" }
    ]
  },
  {
    id: "ulsan-bailando",
    name: { ko: "바일란도 울산", en: "Bailando Ulsan" },
    region: { ko: "울산", en: "Ulsan" },
    city: { ko: "울산 삼산", en: "Samsan" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "울산 최초 라틴 동호회로 산업단지 근무자를 위한 늦은 시간 소셜을 제공합니다.",
      en: "First Latin club in Ulsan with late-start socials for shift workers from the industrial hub."
    },
    links: [{ type: "instagram", url: "https://www.instagram.com/bailandoulsan" }]
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
