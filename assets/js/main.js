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
    name: { ko: "�����", en: "SalsaViva Seoul" },
    region: { ko: "����", en: "Seoul" },
    city: { ko: "����  ȫ��", en: "Hongdae  Mapo" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "2002����� � ���� ���� ��ǥ ��� ��Ʃ���. ���� ������ �ָ� �Ҽ��� ��� ����˴ϴ�.",
      en: "Flagship salsa studio near Hongdae offering weekday classes and weekend socials since 2002."
    },
    links: [
      { type: "website", url: "https://salsaviva.co.kr" },
      { type: "cafe", url: "https://cafe.naver.com/salsaviva" }
    ]
  },
  {
    id: "seoul-clubmambo",
    name: { ko: "Ŭ�� ����", en: "Club Mambo" },
    region: { ko: "����", en: "Seoul" },
    city: { ko: "����  ����", en: "Gangnam  Yeoksam" },
    styles: ["salsa", "bachata", "kizomba"],
    summary: {
      ko: "������ �α� �õ� ���� ��� Ŭ��. ��ƾ ���̺� ���ǰ� �ɾ� �Ҽȷ� �����մϴ�.",
      en: "Old-school salsa club close to Gangnam Station, known for late-night socials and live Latin music."
    },
    links: [
      { type: "website", url: "https://clubmambo.co.kr" },
      { type: "instagram", url: "https://www.instagram.com/clubmambokorea" }
    ]
  },
  {
    id: "seoul-bailamos",
    name: { ko: "���϶��", en: "Bailamos" },
    region: { ko: "����", en: "Seoul" },
    city: { ko: "����  ���｣", en: "Seongsu" },
    styles: ["bachata", "salsa"],
    summary: {
      ko: "����Ÿ ���� Ŀ��ŧ���� Ŀ�� ��ũ���� �����ϴ� ��Ʃ���. �Ҽ� �ʺ��ڸ� ���� �º��� ����.",
      en: "Studio focusing on bachata technique with newcomer onboarding nights and curated socials."
    },
    links: [
      { type: "instagram", url: "https://www.instagram.com/bailamos.kr" },
      { type: "map", url: "https://map.kakao.com/?urlX=513593&urlY=1113797&itemId=1769750927" }
    ]
  },
  {
    id: "gyeonggi-latinplay",
    name: { ko: "��ƾ�÷��� ����", en: "Latin Play Seongnam" },
    region: { ko: "���", en: "Gyeonggi" },
    city: { ko: "����  �д�", en: "Bundang" },
    styles: ["bachata", "salsa"],
    summary: {
      ko: "��� ���� ��ǥ Ŀ�´�Ƽ. �д� ��ž�� �αٿ��� �ָ� �ҼȰ� ������ Ŭ������ ��մϴ�.",
      en: "Leading community in southern Gyeonggi offering weekend socials and one-day workshops near Bundang."
    },
    links: [{ type: "cafe", url: "https://cafe.naver.com/latinplay" }]
  },
  {
    id: "gyeonggi-suwonsalsa",
    name: { ko: "���� ���Ŭ��", en: "Suwon Salsa Club" },
    region: { ko: "���", en: "Gyeonggi" },
    city: { ko: "���� �ΰ�", en: "Suwon" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "����ȭ���� ��ƾ���� ���. ���� ���� �ҼȰ� �ʱ��� ��� ���� ü�� ����.",
      en: "Hub for Suwon and Hwaseong dancers with weekday evening socials and free beginner trials."
    },
    links: [{ type: "cafe", url: "https://cafe.naver.com/suwonsalsa" }]
  },
  {
    id: "incheon-latinwave",
    name: { ko: "��ƾ���̺� ��õ", en: "Latin Wave Incheon" },
    region: { ko: "��õ", en: "Incheon" },
    city: { ko: "�۵�  ����", en: "Songdo" },
    styles: ["salsa", "bachata", "zouk"],
    summary: {
      ko: "�۵��������� ù ��ƾ ��Ʃ���. �йи� ī��� ��õ��� ���� �Ҽ��� �����մϴ�.",
      en: "First Latin studio in Songdo offering combined passes with western Gyeonggi socials."
    },
    links: [{ type: "instagram", url: "https://www.instagram.com/latinwave_incheon" }]
  },
  {
    id: "busan-latinbusan",
    name: { ko: "�λ� ��ƾ����", en: "Busan Latin Dance" },
    region: { ko: "�λ�", en: "Busan" },
    city: { ko: "����  ����", en: "Seomyeon" },
    styles: ["salsa", "bachata", "kizomba"],
    summary: {
      ko: "�λ� ��ǥ Ŀ�´�Ƽ. �ָ� �߿� �ҼȰ� �ؿ�� ������ ����Ÿ Ŭ������ ����.",
      en: "Leading Busan crew running outdoor socials and seasonal bachata classes at Haeundae."
    },
    links: [
      { type: "cafe", url: "https://cafe.naver.com/latinbusan" },
      { type: "instagram", url: "https://www.instagram.com/busanlatindance" }
    ]
  },
  {
    id: "daegu-latindg",
    name: { ko: "�뱸 ��ƾ����", en: "Daegu Latin" },
    region: { ko: "�뱸", en: "Daegu" },
    city: { ko: "������", en: "Dongseongno" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "�뱸 �߽ɰ� �Ҽ� & ���� Ŀ�´�Ƽ. �뱸 ��� �佺Ƽ�� ����.",
      en: "Central Daegu community hosting the annual Daegu Salsa Festival and weekly socials."
    },
    links: [{ type: "cafe", url: "https://cafe.naver.com/dglatin" }]
  },
  {
    id: "daejeon-djlatino",
    name: { ko: "���� ��ƾ����", en: "Daejeon Latin" },
    region: { ko: "����", en: "Daejeon" },
    city: { ko: "�л�", en: "Dunsan" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "��û�� �ִ� �Ը��� ��ƾ Ŀ�´�Ƽ. ���� ����� �ҼȰ� �ʺ� ��ũ�� �.",
      en: "Largest community in the Chungcheong area with bi-weekly socials and starter workshops."
    },
    links: [{ type: "cafe", url: "https://cafe.naver.com/djlatino" }]
  },
  {
    id: "gwangju-latinwave",
    name: { ko: "���� ��ƾ���̺�", en: "Gwangju Latin Wave" },
    region: { ko: "����", en: "Gwangju" },
    city: { ko: "������", en: "Sangmu" },
    styles: ["salsa", "bachata", "zouk"],
    summary: {
      ko: "ȣ���� ���� �� ��ƾ ��Ʃ���. ���� ����Ʈ�� ���� ���� ��ũ�� ����.",
      en: "Permanent studio in the Honam region featuring beginner nights and women-lead workshops."
    },
    links: [{ type: "instagram", url: "https://www.instagram.com/gwangju_latinwave" }]
  },
  {
    id: "jeju-latinholic",
    name: { ko: "��ƾȦ�� ����", en: "LatinHolic Jeju" },
    region: { ko: "����", en: "Jeju" },
    city: { ko: "���ֽ� ����", en: "Gujwa, Jeju" },
    styles: ["bachata", "salsa"],
    summary: {
      ko: "���� �÷��� �Ҽ� & ������ Ŭ����. �������� �߿� ���� �Ҽ��� ���ϴ�.",
      en: "Seasonal socials and pop-up classes across Jeju, including outdoor beach events."
    },
    links: [
      { type: "instagram", url: "https://www.instagram.com/latinholic" },
      { type: "cafe", url: "https://blog.naver.com/latinholic" }
    ]
  },
  {
    id: "ulsan-bailando",
    name: { ko: "��� ���̾ᵵ", en: "Bailando Ulsan" },
    region: { ko: "���", en: "Ulsan" },
    city: { ko: "��굿", en: "Samsan" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "��� ������ ��ƾ��ȣȸ. �����߰��� �߰� �ٹ��ڸ� ���� ���� ���� �Ҽ�.",
      en: "First Latin club in Ulsan with late-start socials for shift workers from the industrial hub."
    },
    links: [{ type: "instagram", url: "https://www.instagram.com/bailandoulsan" }]
  }
];

const regionSelect = document.querySelector("[data-filter-region]");
const styleCheckboxes = Array.from(document.querySelectorAll("[data-filter-style]"));
const searchInput = document.querySelector("[data-filter-search]");
const resetButton = document.querySelector("[data-filter-reset]");
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
};

const getActiveStyles = () =>
  styleCheckboxes.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);

const matchesFilters = (venue, { region, styles, search }) => {
  if (region && region !== "all" && venue.region[LOCALE] !== region) {
    return false;
  }

  if (styles.length) {
    const hasAllStyles = styles.every((style) => venue.styles.includes(style));
    if (!hasAllStyles) {
      return false;
    }
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
  const regionValue = regionSelect?.value || "all";
  const selectedStyles = getActiveStyles();
  const searchValue = (searchInput?.value || "").trim().toLowerCase();

  const filtered = VENUES.filter((venue) =>
    matchesFilters(venue, {
      region: regionValue,
      styles: selectedStyles,
      search: searchValue
    })
  );

  if (countNode) {
    countNode.textContent = formatCount(filtered.length);
  }

  renderVenues(filtered);
};

const resetFilters = () => {
  if (regionSelect) {
    regionSelect.value = "all";
  }

  styleCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  if (searchInput) {
    searchInput.value = "";
  }

  applyFilters();
};

const registerEvents = () => {
  regionSelect?.addEventListener("change", applyFilters);

  styleCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", applyFilters);
  });

  if (searchInput) {
    let debounceId = null;
    searchInput.addEventListener("input", () => {
      if (debounceId) {
        window.clearTimeout(debounceId);
      }
      debounceId = window.setTimeout(applyFilters, 180);
    });
  }

  resetButton?.addEventListener("click", resetFilters);
};

populateRegions();
registerEvents();
applyFilters();
