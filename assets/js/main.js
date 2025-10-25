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

const VENUES = [
  {
  id: "daegu-asura",
  name: { ko: "라틴 아수라", en: "Latin Asura Daegu" },
    region: { ko: "대구", en: "Daegu" },
    city: { ko: "대구 중구", en: "Jung-gu" },
    address: {
      ko: "대구 중구 삼덕동1가 13-2 3층 아수라장",
      en: "3F, Asura Lounge, 13-2 Samdeok-dong 1-ga, Jung-gu, Daegu"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "대구 중구에서 살사와 바차타 수업, 소셜을 운영하는 라틴댄스 커뮤니티입니다.",
      en: "Daegu-based community in Jung-gu offering salsa and bachata classes and socials."
    },
  image: "assets/images/latin_asura.png",
    imageAlt: {
      ko: "라틴 아수라 로고",
      en: "Latin Asura Daegu logo"
    },
    links: [
      {
        type: "band",
        url: "https://www.band.us/band/70307600/post"
      }
    ]
  },
  {
    id: "daegu-baya",
    name: { ko: "라틴클럽 바야", en: "Latin Club Baya" },
    region: { ko: "대구", en: "Daegu" },
    city: { ko: "대구 수성구", en: "Suseong-gu" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "바차타와 살사 워크숍을 중심으로 지역 댄서들을 연결하는 대구 수성구 커뮤니티입니다.",
      en: "Community in Suseong-gu connecting dancers through bachata and salsa workshops."
    },
    image: "assets/images/latinclub_baya.png",
    imageAlt: {
      ko: "라틴클럽 바야 로고",
      en: "Latin Club Baya logo"
    },
    links: [
      {
        type: "band",
        url: "https://www.band.us/band/88118947/intro"
      },
      {
        type: "youtube",
        url: "https://www.youtube.com/@latinclub_baya"
      }
    ]
  },
  {
    id: "daegu-salsadrama",
    name: { ko: "살사드라마", en: "SalsaDrama" },
    region: { ko: "대구", en: "Daegu" },
    city: { ko: "대구 남구", en: "Nam-gu" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "정기 소셜과 초급 클래스로 아마추어 댄서를 키우는 대구 라틴댄스 스튜디오입니다.",
      en: "Daegu studio nurturing new dancers with regular socials and beginner-friendly classes."
    },
    image: "assets/images/salsa_drama.png",
    imageAlt: {
      ko: "살사드라마 대구 소셜 사진",
      en: "SalsaDrama Daegu social photo"
    },
    links: [
      {
        type: "cafe",
        url: "https://cafe.naver.com/salsadrama?iframe_url=/MyCafeIntro.nhn%3Fclubid=29348479"
      }
    ]
  },
  {
    id: "daegu-consstudio",
    name: { ko: "꼰스튜디오", en: "Cons Studio Daegu" },
    region: { ko: "대구", en: "Daegu" },
    city: { ko: "대구 중구", en: "Jung-gu" },
    address: {
      ko: "대구 중구 국채보상로 570-18 꼰스튜디오",
      en: "570-18 Gukchaebosang-ro, Jung-gu, Daegu"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "살사와 바차타 정기 모임으로 당근모임 플랫폼과 인스타그램을 통해 회원을 모집합니다.",
      en: "Community hosting regular salsa and bachata meetups, organizing through Karrot gatherings and Instagram."
    },
    schedule: {
      ko: "매주 일요일 저녁 8시 정모",
      en: "Sundays 8 PM weekly meetup"
    },
    image: "assets/images/con_studio.png",
    imageAlt: {
      ko: "꼰스튜디오 로고",
      en: "Cons Studio Daegu logo"
    },
    links: [
      {
        type: "website",
        url: "https://www.daangn.com/kr/group/%EB%8C%80%EA%B5%AC%EC%82%B4%EC%82%AC-%EB%B0%94%EC%B0%A8%ED%83%80-%EB%9D%BC%ED%8B%B4%EB%8C%84%EC%8A%A4-%EA%BC%B0%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4-d8prbg7m6nqo/?in=%EC%9C%A8%ED%95%98%EB%8F%99-5616"
      },
      { type: "instagram", url: "https://www.instagram.com/latin_moving/" }
    ]
  },
  {
    id: "daegu-latinshine",
    name: { ko: "라틴펍 샤인", en: "Latin Pub SHINE" },
    region: { ko: "대구", en: "Daegu" },
    city: { ko: "대구", en: "Daegu" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "라틴 라이브와 소셜을 함께 즐길 수 있는 대구의 라틴 펍입니다.",
      en: "Daegu Latin pub combining live music with salsa and bachata socials."
    },
    image: "assets/images/latin_pub_shine.png",
    imageAlt: {
      ko: "라틴펍 샤인 로고",
      en: "Latin Pub SHINE logo"
    },
    links: [
      { type: "instagram", url: "https://www.instagram.com/p/C_2b2GRpjTA/" },
      { type: "band", url: "https://www.band.us/band/72771396/post" },
      {
        type: "facebook",
        url: "https://www.facebook.com/p/LatinPub-SHINE-100039631676264/?locale=ml_IN&_rdr"
      }
    ]
  },
  {
    id: "daegu-babaroo",
    name: { ko: "클럽 바바루", en: "Club Babaroo" },
    region: { ko: "대구", en: "Daegu" },
    city: { ko: "대구 중구", en: "Jung-gu, Daegu" },
    address: {
      ko: "대구 중구 동성로4길 39 3·4층 바바루",
      en: "3-4F, Babaroo, 39 Dongseong-ro 4-gil, Jung-gu, Daegu"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "왕초보 무료반과 정기 소셜을 운영하는 대구 대표 라틴 동호회입니다.",
      en: "Daegu-based Latin club running free beginner courses and busy weekly socials."
    },
    schedule: {
      ko: "수 20:00 레슨 · 금 21:30 정모",
      en: "Wednesdays 8 PM lessons · Fridays 9:30 PM social"
    },
    image: "assets/images/club_babaru.png",
    imageAlt: {
      ko: "클럽 바바루 로고",
      en: "Club Babaroo logo"
    },
    links: [{ type: "cafe", url: "https://cafe.naver.com/busanholics" }]
  },
  {
    id: "daegu-nysalsa",
  name: { ko: "NY 살사아카데미", en: "NY Salsa Academy" },
    region: { ko: "대구", en: "Daegu" },
    city: { ko: "대구", en: "Daegu" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "전문 강사진이 살사·바차타 커리큘럼을 제공하는 대구 라틴댄스 학원입니다.",
      en: "Daegu academy offering structured salsa and bachata training with professional instructors."
    },
    image: "assets/images/ny_salsa_dance.png",
    imageAlt: {
      ko: "NY 살사아카데미 로고",
      en: "NY Salsa Academy logo"
    },
    links: [
      {
        type: "website",
        url: "https://www.daangn.com/kr/local-profile/ny%EC%82%B4%EC%82%AC%EB%8C%84%EC%8A%A4%ED%95%99%EC%9B%90-1312301"
      },
      {
        type: "store",
        url: "https://smartstore.naver.com/nysalsa/products/6030784833?"
      }
    ]
  },
  {
    id: "daegu-salsaholic",
    name: { ko: "살사홀릭 대구", en: "SalsaHolic Daegu" },
    region: { ko: "대구", en: "Daegu" },
    city: { ko: "대구", en: "Daegu" },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "바바루 운영진이 진행하는 살사·바차타 커뮤니티입니다.",
      en: "Daegu community led by Babaroo crew focusing on salsa and bachata socials."
    },
    image: "assets/images/salsa_holic.png",
    imageAlt: {
      ko: "살사홀릭 대구 로고",
      en: "SalsaHolic Daegu logo"
    },
    links: [
      { type: "instagram", url: "https://www.instagram.com/salsaholic_d.g/" },
      { type: "blog", url: "https://m.blog.naver.com/PostList.naver?blogId=babaru00&tab=1" }
    ]
  },
  {
    id: "daegu-jooc",
    name: { ko: "대구 주크", en: "Daegu Juke" },
    region: { ko: "대구", en: "Daegu" },
    city: { ko: "대구", en: "Daegu" },
    styles: ["brazilianjuke", "bachatajuke"],
    summary: {
      ko: "브라질리언 주크와 바차주크를 중심으로 활동하는 대구 라틴댄스 동호회입니다.",
      en: "Daegu dance group focusing on Brazilian Zouk and Bachata-Zouk sessions."
    },
    image: "assets/images/daegu_zouk.png",
    imageAlt: {
      ko: "대구 주크 로고",
      en: "Daegu Juke logo"
    },
    links: [{ type: "band", url: "https://www.band.us/band/97302785/post" }]
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
  const cityLabel = venue.city[LOCALE];
  meta.textContent = venue.address?.[LOCALE] ? `${cityLabel}\n${venue.address[LOCALE]}` : cityLabel;

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

  filtered.sort((a, b) =>
    a.name[LOCALE].localeCompare(b.name[LOCALE], LOCALE === "ko" ? "ko" : "en", {
      sensitivity: "base"
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
