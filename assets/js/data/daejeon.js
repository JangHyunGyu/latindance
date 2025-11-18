const DAEJEON_VENUES = [
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
        url: "https://m.cafe.naver.com/ca-fe/daejeonratinclub"
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
