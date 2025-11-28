var GYEONGGI_VENUES = [
  {
    id: "gyeonggi-suradan",
    name: { ko: "수라댄", en: "Suradan", es: "Suradan" },
    region: { ko: "경기", en: "Gyeonggi-do", es: "Gyeonggi-do" },
    city: { ko: "경기 수원시 팔달구", en: "Paldal-gu, Suwon-si", es: "Paldal-gu, Suwon-si" },
    address: {
      ko: "경기도 수원시 팔달구 인계동 1024-5 4층",
      en: "4F, 1024-5 Ingye-dong, Paldal-gu, Suwon-si, Gyeonggi-do",
      es: "4F, 1024-5 Ingye-dong, Paldal-gu, Suwon-si, Gyeonggi-do"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "수원 인계동의 스튜디오에서 초보자도 부담 없이 살사와 바차타를 배우고, 소규모 연습 모임과 주말 소셜로 지역 라틴 문화를 나누는 커뮤니티입니다.",
      en: "Community based in Suwon's Ingye-dong where newcomers can learn salsa and bachata comfortably, then keep dancing through small practice groups and weekend socials.",
      es: "Comunidad con sede en Ingye-dong de Suwon donde los recién llegados pueden aprender salsa y bachata cómodamente, y luego seguir bailando a través de pequeños grupos de práctica y eventos sociales de fin de semana."
    },
    image: "assets/images/suladan.png",
    imageAlt: {
      ko: "수라댄 로고",
      en: "Suradan logo",
      es: "Logotipo de Suradan"
    },
    links: [
      { type: "cafe", url: "https://m.cafe.daum.net/dk2094" },
      {
        type: "phone",
        url: "tel:010-9655-2969",
        label: {
          ko: "다비드",
          en: "David",
          es: "David"
        }
      }
    ]
  },
  {
    id: "gyeonggi-latink",
    name: { ko: "라틴K", en: "Latin K", es: "Latin K" },
    region: { ko: "경기", en: "Gyeonggi-do", es: "Gyeonggi-do" },
    city: { ko: "경기 수원시", en: "Suwon", es: "Suwon" },
    address: {
      ko: "경기도 수원시 인계동",
      en: "Ingye-dong, Suwon-si, Gyeonggi-do",
      es: "Ingye-dong, Suwon-si, Gyeonggi-do"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "수원 인계동에서 활동하는 라틴댄스 동호회입니다.",
      en: "Latin dance community in Ingye-dong, Suwon.",
      es: "Comunidad de baile latino en Ingye-dong, Suwon."
    },
    image: "assets/images/latin_k.png",
    imageAlt: {
      ko: "라틴K 로고",
      en: "Latin K logo",
      es: "Logotipo de Latin K"
    },
    links: [
      { type: "band", url: "https://band.us/@suwonlatindancek" },
      { type: "map", url: "https://naver.me/FxC9ttZ0" },
      { type: "youtube", url: "https://www.youtube.com/@tensiontv82" },
      { type: "instagram", url: "https://www.instagram.com/tensiontv_bachata.salsa" },
      { type: "facebook", url: "https://www.facebook.com/profile.php?id=100000640355772" },
      {
        type: "phone",
        url: "tel:010-6484-2634",
        label: {
          ko: "텐션",
          en: "Tension",
          es: "Tension"
        }
      }
    ]
  },
  {
    id: "gyeonggi-latinsocialclub",
    name: { ko: "라틴소셜클럽", en: "Latin Social Club", es: "Latin Social Club" },
    region: { ko: "경기", en: "Gyeonggi-do", es: "Gyeonggi-do" },
    city: { ko: "경기 안산시 단원구", en: "Danwon-gu, Ansan-si", es: "Danwon-gu, Ansan-si" },
    address: {
      ko: "경기 안산시 단원구 민속공원로 85 B1",
      en: "B1, 85 Minsokgongwon-ro, Danwon-gu, Ansan-si, Gyeonggi-do",
      es: "B1, 85 Minsokgongwon-ro, Danwon-gu, Ansan-si, Gyeonggi-do"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "안산에서 가장 오래된 살사 동호회로, 사랑방 같은 편안한 분위기에서 초보자도 쉽게 어울릴 수 있습니다.",
      en: "The oldest salsa club in Ansan, offering a comfortable, welcoming atmosphere where beginners can easily join in.",
      es: "El club de salsa más antiguo de Ansan, que ofrece un ambiente cómodo y acogedor donde los principiantes pueden unirse fácilmente."
    },
    image: "assets/images/latin_social_club.png",
    imageAlt: {
      ko: "라틴소셜클럽 로고",
      en: "Latin Social Club logo",
      es: "Logotipo de Latin Social Club"
    },
    links: [
      { type: "cafe", url: "https://cafe.daum.net/latinsocialclub" },
      { type: "kakao", url: "https://open.kakao.com/me/latindance" },
      {
        type: "phone",
        url: "tel:010-5314-5414",
        label: {
          ko: "쿨가이",
          en: "Cool Guy",
          es: "Cool Guy"
        }
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.GYEONGGI_VENUES = GYEONGGI_VENUES;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = GYEONGGI_VENUES;
}
