const GYEONGGI_VENUES = [
  {
    id: "gyeonggi-suradan",
    name: { ko: "수라댄", en: "Suradan" },
    region: { ko: "경기", en: "Gyeonggi-do" },
    city: { ko: "경기 수원시 팔달구", en: "Paldal-gu, Suwon-si" },
    address: {
      ko: "경기도 수원시 팔달구 인계동 1024-5 4층",
      en: "4F, 1024-5 Ingye-dong, Paldal-gu, Suwon-si, Gyeonggi-do"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "수원 인계동의 스튜디오에서 초보자도 부담 없이 살사와 바차타를 배우고, 소규모 연습 모임과 주말 소셜로 지역 라틴 문화를 나누는 커뮤니티입니다.",
      en: "Community based in Suwon's Ingye-dong where newcomers can learn salsa and bachata comfortably, then keep dancing through small practice groups and weekend socials."
    },
    image: "assets/images/suladan.png",
    imageFit: "cover",
    imageAlt: {
      ko: "수라댄 로고",
      en: "Suradan logo"
    },
    links: [
      { type: "cafe", url: "https://m.cafe.daum.net/dk2094" },
      {
        type: "phone",
        url: "tel:010-9655-2969",
        label: {
          ko: "다비드",
          en: "David"
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
