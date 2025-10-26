const VENUES = [
  {
    id: "daegu-asura",
    name: { ko: "라틴 아수라", en: "Latin Asura Daegu" },
    region: { ko: "대구", en: "Daegu" },
    city: { ko: "대구 중구", en: "Jung-gu" },
    address: {
      ko: "대구광역시 중구 삼덕동1가 13-2 3층 아수라장",
      en: "3F, Asura Lounge, 13-2 Samdeok-dong 1-ga, Jung-gu, Daegu"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "대구 중구 삼덕동에서 살사와 바차타 레슨과 소셜을 운영하는 커뮤니티입니다.",
      en: "Community in Jung-gu, Daegu running salsa and bachata lessons and socials."
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
    city: { ko: "대구 중구", en: "Jung-gu" },
    address: {
      ko: "대구광역시 중구 동성로4길 20-7",
      en: "20-7 Dongseong-ro 4-gil, Jung-gu, Daegu"
    },
    styles: ["bachata", "linedance"],
    summary: {
      ko: "동성로에서 바차타와 라인댄스 클래스를 운영하고 정기 모임을 여는 클럽입니다.",
      en: "Club in Dongseong-ro hosting bachata and line dance classes with regular gatherings."
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
        type: "instagram",
        url: "https://www.instagram.com/latinclub_baya/"
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
    city: { ko: "대구 중구", en: "Jung-gu" },
    address: {
      ko: "대구광역시 중구 동성로4길 39 4층",
      en: "4F, 39 Dongseong-ro 4-gil, Jung-gu, Daegu"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "동성로4길에서 살사와 바차타 레슨, 정기 소셜을 진행하는 스튜디오입니다.",
      en: "Studio on Dongseong-ro 4-gil offering salsa and bachata lessons and regular socials."
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
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/salsadrama2010/"
      }
    ]
  },
  {
    id: "daegu-consstudio",
    name: { ko: "꼰스튜디오", en: "Cons Studio Daegu" },
    region: { ko: "대구", en: "Daegu" },
    city: { ko: "대구 중구", en: "Jung-gu" },
    address: {
      ko: "대구광역시 중구 국채보상로 570-18 꼰스튜디오",
      en: "570-18 Gukchaebosang-ro, Jung-gu, Daegu"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "국채보상로에서 살사와 바차타 정기 모임을 열고 당근모임과 인스타그램으로 공지합니다.",
      en: "Group on Gukchaebosang-ro running regular salsa and bachata meetups announced via Karrot and Instagram."
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
    city: { ko: "대구 중구", en: "Jung-gu" },
    address: {
      ko: "대구광역시 중구 동덕로27길 39 3층 (봉산동 37-19)",
      en: "3F, 39 Dongdeok-ro 27-gil (37-19 Bongsan-dong), Jung-gu, Daegu"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "동덕로27길에서 라틴 라이브 공연과 살사·바차타 소셜을 여는 라틴 펍입니다.",
      en: "Latin pub on Dongdeok-ro 27-gil hosting live music with salsa and bachata socials."
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
      ko: "대구광역시 중구 동성로4길 39 3·4층 바바루",
      en: "3-4F, Babaroo, 39 Dongseong-ro 4-gil, Jung-gu, Daegu"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "동성로4길에서 살사와 바차타 초급 레슨과 정기 소셜을 운영하는 동호회입니다.",
      en: "Club on Dongseong-ro 4-gil running beginner salsa and bachata lessons with regular socials."
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
    address: {
      ko: "대구광역시 중구 동덕로27길 39 4층 (봉산동 37-19)",
      en: "4F, 39 Dongdeok-ro 27-gil (37-19 Bongsan-dong), Jung-gu, Daegu"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "동덕로27길에서 살사와 바차타 커리큘럼을 운영하는 라틴댄스 학원입니다.",
      en: "Latin dance academy on Dongdeok-ro 27-gil providing structured salsa and bachata programs."
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
    city: { ko: "대구 중구", en: "Jung-gu" },
    address: {
      ko: "대구광역시 중구 동성로4길 39 4층",
      en: "4F, 39 Dongseong-ro 4-gil, Jung-gu, Daegu"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "바바루 운영진이 동성로4길에서 살사와 바차타 소셜과 워크숍을 진행하는 커뮤니티입니다.",
      en: "Community led by the Babaroo team hosting salsa and bachata socials and workshops on Dongseong-ro 4-gil."
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
      ko: "브라질리언 주크와 바차주크 세션을 운영하는 대구 모임입니다.",
      en: "Daegu group hosting Brazilian Zouk and Bachata-Zouk sessions."
    },
    image: "assets/images/daegu_zouk.png",
    imageAlt: {
      ko: "대구 주크 로고",
      en: "Daegu Juke logo"
    },
    links: [{ type: "band", url: "https://www.band.us/band/97302785/post" }]
  }
];
