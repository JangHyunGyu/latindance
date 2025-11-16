const GYEONGSANGBUKDO_VENUES = [
  {
    id: "gumi-arte",
    name: { ko: "구미 아르떼", en: "Gumi Arte" },
    region: { ko: "경북", en: "Gyeongsangbuk-do" },
    city: { ko: "경북 구미시", en: "Gumi-si" },
    address: {
      ko: "경북 구미시 송원서로2길 37-1 4층",
      en: "4F, 37-1 Songwonseo-ro 2-gil, Gumi-si, Gyeongsangbuk-do"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "구미 도심에서 살사·바차타 기초 강의와 주말 소셜을 열어 지역에 라틴댄스 문화를 퍼뜨리는 커뮤니티입니다.",
      en: "Community in downtown Gumi growing the local Latin scene with beginner-friendly salsa and bachata classes plus weekend socials."
    },
    image: "assets/images/arte.png",
    imageAlt: {
      ko: "구미 아르떼 로고",
      en: "Gumi Arte logo"
    },
    imageFit: "contain",
    links: [
      { type: "instagram", url: "https://www.instagram.com/gumi.arte/" },
      { type: "band", url: "https://www.band.us/@no1kumiarte" },
      { type: "cafe", url: "https://cafe.naver.com/gumiarte" },
      { type: "blog", url: "https://m.blog.naver.com/lch5262" },
      { type: "youtube", url: "https://www.youtube.com/@salsaltv2134" },
      {
        type: "phone",
        url: "tel:010-9880-5262",
        label: {
          ko: "살살",
          en: "Salsal"
        }
      },
      {
        type: "phone",
        url: "tel:010-5552-2336",
        label: {
          ko: "열열",
          en: "Yeolyeol"
        }
      }
    ]
  },
  {
    id: "pohang-dancelove",
    name: { ko: "포항댄스사랑 모임", en: "Pohang Dance Love" },
    region: { ko: "경북", en: "Gyeongsangbuk-do" },
    city: { ko: "경북 포항시", en: "Pohang-si" },
    address: {
      ko: "경북 포항시 남구 중앙로 112 4층",
      en: "4F, 112 Jungang-ro, Nam-gu, Pohang-si, Gyeongsangbuk-do"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "단계별 수업으로 초보자도 쉽게 배우고 긍정적인 분위기와 더불어 해변살사 같은 특별 이벤트와 전국에서도 규모 있는 주년 파티를 개최할 만큼 저력과 활발한 활동을 자랑합니다.",
      en: "Pohang Latin dance community offering step-by-step salsa and bachata classes that welcome beginners, fostering an upbeat space for office workers to recharge, and known for energetic beach salsa events plus large-scale anniversary parties that draw dancers from across Korea."
    },
    image: "assets/images/pohang_dance_love.png",
    imageAlt: {
      ko: "포항댄스사랑 모임 로고",
      en: "Pohang Dance Love logo"
    },
    links: [
      { type: "cafe", url: "https://cafe.naver.com/pohangdancelove" },
      {
        type: "website",
        url: "https://www.daangn.com/kr/group/%ED%8F%AC%ED%95%AD%EB%8C%84%EC%8A%A4%EC%82%AC%EB%9E%91-8hk5jf54o9o1/"
      },
      { type: "facebook", url: "https://www.facebook.com/phdjkoong" },
      {
        type: "phone",
        url: "tel:010-9366-8635",
        label: {
          ko: "깨비",
          en: "Kkaebi"
        }
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.GYEONGSANGBUKDO_VENUES = GYEONGSANGBUKDO_VENUES;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = GYEONGSANGBUKDO_VENUES;
}
