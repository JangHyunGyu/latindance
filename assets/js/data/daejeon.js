var DAEJEON_VENUES = [
  {
    id: "daejeon-latinclub",
    name: { ko: "대전라틴클럽", en: "Daejeon Latin Club" },
    region: { ko: "대전", en: "Daejeon" },
    city: { ko: "대전 서구", en: "Seo-gu, Daejeon" },
    address: {
      ko: "대전광역시 서구 갈마동 갈마중로8번길 37 303호",
      en: "Room 303, 37 Galmajung-ro 8beon-gil, Galma-dong, Seo-gu, Daejeon"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "살사, 바차타, 차차 등 다양한 라틴 댄스를 즐기는 2040 직장인들의 활기차고 편안한 커뮤니티입니다.",
      en: "A lively yet relaxed community for working professionals in their 20s to 40s who enjoy salsa, bachata, cha-cha, and other Latin dances."
    },
    image: "assets/images/dlc.png",
    imageAlt: {
      ko: "대전라틴클럽 로고",
      en: "Daejeon Latin Club logo"
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
    name: { ko: "라틴팩토리", en: "Latin Factory" },
    region: { ko: "대전", en: "Daejeon" },
    city: { ko: "대전 유성구", en: "Yuseong-gu, Daejeon" },
    address: {
      ko: "대전시 유성구 장대동 353-1 B1",
      en: "B1, 353-1 Jangdae-dong, Yuseong-gu, Daejeon"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "대전 유성구에서 활동하는 라틴댄스 동호회입니다.",
      en: "Latin dance community in Yuseong-gu, Daejeon."
    },
    image: "assets/images/latin_factory.png",
    imageAlt: {
      ko: "라틴팩토리 로고",
      en: "Latin Factory logo"
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
          en: "Air"
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
