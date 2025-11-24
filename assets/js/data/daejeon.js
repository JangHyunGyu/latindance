var DAEJEON_VENUES = [
  {
    id: "daejeon-latinclub",
    name: { ko: "대전라틴클럽", en: "Daejeon Latin Club", es: "Daejeon Latin Club" },
    region: { ko: "대전", en: "Daejeon", es: "Daejeon" },
    city: { ko: "대전 서구", en: "Seo-gu, Daejeon", es: "Seo-gu, Daejeon" },
    address: {
      ko: "대전광역시 서구 갈마동 갈마중로8번길 37 303호",
      en: "Room 303, 37 Galmajung-ro 8beon-gil, Galma-dong, Seo-gu, Daejeon",
      es: "Room 303, 37 Galmajung-ro 8beon-gil, Galma-dong, Seo-gu, Daejeon"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "살사, 바차타, 차차 등 다양한 라틴 댄스를 즐기는 2040 직장인들의 활기차고 편안한 커뮤니티입니다.",
      en: "A lively yet relaxed community for working professionals in their 20s to 40s who enjoy salsa, bachata, cha-cha, and other Latin dances.",
      es: "Una comunidad animada pero relajada para profesionales en sus 20 a 40 años que disfrutan de la salsa, bachata, cha-cha y otros bailes latinos."
    },
    image: "assets/images/dlc.png",
    imageAlt: {
      ko: "대전라틴클럽 로고",
      en: "Daejeon Latin Club logo",
      es: "Logotipo de Daejeon Latin Club"
    },
    links: [
      { type: "youtube", url: "https://www.youtube.com/@korealatincouple" },
      { type: "instagram", url: "https://www.instagram.com/daejeonlatinclub/" },
      { type: "facebook", url: "https://www.facebook.com/DaejeonLatin/" },
      {
        type: "cafe",
        url: "https://cafe.naver.com/daejeonratinclub"
      }
    ]
  },
  {
    id: "daejeon-latinfactory",
    name: { ko: "라틴팩토리", en: "Latin Factory", es: "Latin Factory" },
    region: { ko: "대전", en: "Daejeon", es: "Daejeon" },
    city: { ko: "대전 유성구", en: "Yuseong-gu, Daejeon", es: "Yuseong-gu, Daejeon" },
    address: {
      ko: "대전광역시 유성구 장대동 353-1 B1",
      en: "B1, 353-1 Jangdae-dong, Yuseong-gu, Daejeon",
      es: "B1, 353-1 Jangdae-dong, Yuseong-gu, Daejeon"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "대전 유성구에서 활동하는 라틴댄스 동호회입니다.",
      en: "Latin dance community in Yuseong-gu, Daejeon.",
      es: "Comunidad de baile latino en Yuseong-gu, Daejeon."
    },
    image: "assets/images/latin_factory.png",
    imageAlt: {
      ko: "라틴팩토리 로고",
      en: "Latin Factory logo",
      es: "Logotipo de Latin Factory"
    },
    links: [
      { type: "cafe", url: "https://cafe.naver.com/latinfactory" },
      { type: "instagram", url: "https://www.instagram.com/latinfactory_air/" },
      { type: "threads", url: "https://www.threads.net/@latinfactory_air" },
      {
        type: "phone",
        url: "tel:010-5433-5383",
        label: {
          ko: "에어",
          en: "Air",
          es: "Air"
        }
      }
    ]
  },
  {
    id: "daejeon-noche",
    name: { ko: "노체", en: "Noche", es: "Noche" },
    region: { ko: "대전", en: "Daejeon", es: "Daejeon" },
    city: { ko: "대전 서구", en: "Seo-gu, Daejeon", es: "Seo-gu, Daejeon" },
    address: {
      ko: "대전광역시 서구 둔산로 31번길 66 3층",
      en: "3F, 66 Dunsan-ro 31beon-gil, Seo-gu, Daejeon",
      es: "3F, 66 Dunsan-ro 31beon-gil, Seo-gu, Daejeon"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "대전 서구 둔산동에서 활동하는 라틴댄스 동호회입니다.",
      en: "Latin dance community in Dunsan-dong, Seo-gu, Daejeon.",
      es: "Comunidad de baile latino en Dunsan-dong, Seo-gu, Daejeon."
    },
    image: "assets/images/noche.png",
    imageAlt: {
      ko: "노체 로고",
      en: "Noche logo",
      es: "Logotipo de Noche"
    },
    links: [
      { type: "cafe", url: "https://cafe.naver.com/djnoche" },
      {
        type: "phone",
        url: "tel:010-3409-2312",
        label: {
          ko: "줄리안",
          en: "Julian",
          es: "Julian"
        }
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.DAEJEON_VENUES = DAEJEON_VENUES;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = DAEJEON_VENUES;
}
