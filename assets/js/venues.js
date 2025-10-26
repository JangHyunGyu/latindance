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
  styles: ["salsa", "bachata", "kizomba"],
    summary: {
      ko: "살사와 바차타를 사랑하는 사람들이 모여 화요일 무료 풋워크 워크샵과 활기찬 정모를 즐기고, 스튜디오에서 정이 넘치는 커뮤니티를 만들어 가는 동호회입니다.",
      en: "Vibrant group of salsa and bachata lovers offering free Tuesday footwork workshops, lively weekly meetups, and a warm community that gathers at the Asurajang studio."
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
      },
      {
        type: "website",
        url: "https://www.daangn.com/kr/group/%EB%8C%80%EA%B5%AC%EB%9D%BC%ED%8B%B4%EC%95%84%EC%88%98%EB%9D%BC-%EC%82%B4%EC%82%AC%EB%B0%94%EC%B0%A8%ED%83%80-w26qjxjaijq4/"
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
      ko: "바차타 특화 수준별 맞춤 커리큘럼으로 실력을 빠르게 키우며, 활발한 커뮤니티 소통과 다양한 파티를 즐길 수 있는 라틴클럽입니다.",
      en: "Latin club where veteran instructors warmly share the joy of latin dance, level-tailored bachata programs accelerate your progress, and an active community plus themed parties keep the Latin rhythms alive."
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
      ko: "퇴근 후 2030 직장인들이 전문 강사와 함께 살사·바차타를 배우고 정기 소셜로 교류하는 라틴 댄스 모임입니다.",
      en: "Evening community where 20s and 30s learn salsa and bachata with professional instructors, structured lessons, and lively socials."
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
      ko: "살사·바차타 정기 모임을 운영하며 초보부터 숙련자까지 함께 어울릴 수 있는 라틴 댄스 동호회입니다.",
      en: "Latin dance community hosting regular salsa and bachata meetups for dancers of all levels."
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
      ko: "초보자도 살사·바차타를 배우고 즐기며 동호회 활동으로 사람들과 교류할 수 있고, 라틴 음악과 함께 칵테일·하이볼 같은 음료를 즐길 수 있는 라틴 펍입니다.",
      en: "Latin pub where newcomers can learn and enjoy salsa or bachata, connect with local socials, or simply relax with Latin beats and cocktails or highballs."
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
      ko: "대구 최대 규모의 라틴댄스 전문 클럽이자 아카데미로, 살사·바차타 등 다양한 라틴댄스를 배우고 즐길 수 있는 공간입니다.",
      en: "Daegu's largest Latin dance club and academy offering a space to learn and enjoy salsa, bachata, and more."
    },
    image: "assets/images/club_babaru.png",
    imageAlt: {
      ko: "클럽 바바루 로고",
      en: "Club Babaroo logo"
    },
    links: [{ type: "cafe", url: "https://cafe.naver.com/busanholics" }]
  },
  {
    id: "daegu-mn",
    name: { ko: "M&N", en: "M&N" },
    region: { ko: "대구", en: "Daegu" },
    city: { ko: "대구 남구", en: "Nam-gu" },
    address: {
      ko: "대구광역시 남구 중앙대로 215",
      en: "215 Jungang-daero, Nam-gu, Daegu"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "살사와 바차타를 사랑하는 사람들이 모여 정보를 나누고, 즐겁고 건강하게 라틴 문화를 즐기려는 대구 커뮤니티입니다.",
      en: "Daegu community where salsa and bachata enthusiasts gather to share insights and enjoy Latin culture in a fun, healthy way."
    },
    image: "assets/images/mn.png",
    imageAlt: {
      ko: "M&N 로고",
      en: "M&N logo"
    },
    links: [
      {
        type: "website",
        url: "https://karrotmarket.com/kr/group/%EB%8C%80%EA%B5%AC%EB%9D%BC%ED%8B%B4%EB%8C%84%EC%8A%A4-%EC%82%B4%EC%82%AC%EB%B0%94%EC%B0%A8%ED%83%80-m-n-3r61i1xewiur/?in=%EB%82%A8%EC%82%B0%EB%8F%99-5682"
      }
    ]
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
      ko: "살사와 바차타 커리큘럼을 운영하는 라틴댄스 학원입니다.",
      en: "Latin dance academy providing structured salsa and bachata programs."
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
      ko: "바바루 운영진이 살사와 바차타 소셜과 워크숍을 진행하는 커뮤니티입니다.",
      en: "Community led by the Babaroo team hosting salsa and bachata socials and workshops."
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
      ko: "브라질리언 주크와 바차주크를 함께 즐기며 세션·연습모임으로 교류하는 대구 커뮤니티입니다.",
      en: "Daegu community that shares Brazilian Zouk and Bachata-Zouk through collaborative sessions and practice meetups."
    },
    image: "assets/images/daegu_zouk.png",
    imageAlt: {
      ko: "대구 주크 로고",
      en: "Daegu Juke logo"
    },
    links: [{ type: "band", url: "https://www.band.us/band/97302785/post" }]
  },
  {
    id: "busan-lalala",
    name: { ko: "라라라살사", en: "LaLaLa Salsa" },
    region: { ko: "부산", en: "Busan" },
    city: { ko: "부산 부산진구", en: "Busanjin-gu" },
    address: {
      ko: "부산광역시 부산진구 부전로20번길 5층",
      en: "5F, Bujeon-ro 20beon-gil, Busanjin-gu, Busan"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "주중 여러 차례 정모를 열어 다양한 시간대에 춤을 즐길 수 있고, 친밀한 동호회 분위기와 중년 강습, 교류 파티까지 운영하는 부산 라틴 커뮤니티입니다.",
      en: "Busan Latin community hosting multiple weekly meetups across Gwangalli and Seomyeon, fostering close-knit friendships, offering middle-aged salsa sessions, and arranging exchange socials."
    },
    image: "assets/images/lalala.png",
    imageAlt: {
      ko: "라라라살사 로고",
      en: "LaLaLa Salsa logo"
    },
    links: [
      { type: "band", url: "https://www.band.us/@051salsa" }
    ]
  },
  {
    id: "busan-rueda",
    name: { ko: "루에다", en: "Rueda" },
    region: { ko: "부산", en: "Busan" },
    city: { ko: "부산 부산진구", en: "Busanjin-gu" },
    address: {
      ko: "부산광역시 부산진구 신천대로62번길 42 2층",
      en: "2F, 42 Sincheon-daero 62beon-gil, Busanjin-gu, Busan"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "상시 연습 환경, 전문 강사진, 다양한 국적의 회원, 연습 후 뒷풀이, SNS 기반 활발한 소통으로 즐겁게 살사·바차타를 배우고 교류하는 커뮤니티입니다.",
      en: "Busan Seomyeon community welcoming an international mix of dancers with easy access, a free one-month beginner course, daily practice space, veteran instructors, and active socials across band and Instagram."
    },
    image: "assets/images/rueda.png",
    imageAlt: {
      ko: "루에다 부산 로고",
      en: "Rueda Busan logo"
    },
    links: [
      { type: "instagram", url: "https://www.instagram.com/rueda_busan/" },
      { type: "blog", url: "https://blog.naver.com/hyunayab" },
      { type: "facebook", url: "https://www.facebook.com/azucarinrueda/" },
      { type: "band", url: "https://www.band.us/@ruedaclub" },
      { type: "youtube", url: "https://www.youtube.com/@busan_rueda" }
    ]
  },
  {
  id: "busan-nobless",
  name: { ko: "노블레스", en: "Nobless" },
    region: { ko: "부산", en: "Busan" },
    city: { ko: "부산 부산진구", en: "Busanjin-gu" },
    address: {
      ko: "부산광역시 부산진구 양지로5번길 8 지하 1층",
      en: "B1, 8 Yangji-ro 5beon-gil, Busanjin-gu, Busan"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "4050 세대를 위한 라틴댄스 동호회로 월요일마다 정기 모임을 열고, 살사·메렝게·바차타 강습과 와인·뷔페 파티 같은 사교 이벤트를 즐길 수 있는 커뮤니티입니다.",
      en: "latin club for dancers in their 40s and 50s with Monday sessions, teaching salsa, merengue, and bachata alongside wine and buffet socials."
    },
    image: "assets/images/noblesse.png",
    imageAlt: {
      ko: "노블레스 부산 로고",
      en: "Nobless Busan logo"
    },
    links: [{ type: "band", url: "https://www.band.us/@noblessbusan" }]
  },
  {
  id: "busan-latino",
  name: { ko: "라티노", en: "Latino" },
    region: { ko: "부산", en: "Busan" },
    city: { ko: "부산 부산진구", en: "Busanjin-gu" },
    address: {
      ko: "부산광역시 부산진구 양지로5번길 8 지하 1층",
      en: "B1, 8 Yangji-ro 5beon-gil, Busanjin-gu, Busan"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "2001년부터 부산 살사의 메카로 자리 잡아 살사·바차타·키좀바 강습을 매일 열고, 초보자도 부담 없이 참여하는 활기찬 소셜과 정기 이벤트로 라틴 문화를 나누는 클럽입니다.",
      en: "Founded in 2001 as the heart of Busan salsa, this club runs daily salsa, bachata, and kizomba classes, open socials for newcomers, and regular showcases that keep Latin culture thriving."
    },
    image: "assets/images/latino.png",
    imageAlt: {
      ko: "라티노 부산 로고",
      en: "Latino Busan logo"
    },
    links: [
      { type: "band", url: "https://www.band.us/band/8166230/post" },
      { type: "instagram", url: "https://www.instagram.com/latino_salsa_club/" }
    ]
  },
  {
    id: "busan-salsafit",
    name: { ko: "살사핏 댄스학원", en: "Salsafit Dance Academy" },
    region: { ko: "부산", en: "Busan" },
    city: { ko: "부산 부산진구", en: "Busanjin-gu" },
    address: {
      ko: "부산광역시 부산진구 신천대로 50번길 72",
      en: "72 Sincheon-daero 50beon-gil, Busanjin-gu, Busan"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "체계적인 살사·바차타 커리큘럼과 피트니스 기반 트레이닝으로 기본기부터 소셜 응용까지 지도하고, 초보자도 환영하는 정규 수업을 운영하는 부산진구 라틴 댄스 학원입니다.",
      en: "Busanjin-gu Latin dance academy pairing structured salsa and bachata curricula with fitness-inspired training, guiding students from fundamentals to social dancing while welcoming beginners year-round."
    },
    image: "assets/images/salsa_fit.png",
    imageAlt: {
      ko: "살사핏 로고",
      en: "Salsafit logo"
    },
    links: [
      { type: "instagram", url: "https://www.instagram.com/salsafitkorea/" },
      { type: "blog", url: "https://blog.naver.com/salsafit" },
      { type: "youtube", url: "https://www.youtube.com/@karinapark_korea" }
    ]
  },
  {
    id: "busan-feeldance",
    name: { ko: "필댄스", en: "Feel Dance" },
    region: { ko: "부산", en: "Busan" },
    city: { ko: "부산 부산진구", en: "Busanjin-gu" },
    address: {
      ko: "부산광역시 부산진구 부전로 95 이현빌딩 4층",
      en: "4F, Ihyeon Building, 95 Bujeon-ro, Busanjin-gu, Busan"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "초보자도 부담 없이 살사·바차타를 배우고, 부산을 넘어 창원·대구 지부와도 연결되어 SNS로 활발히 소통하며 친목을 나누는 라틴 동호회입니다.",
      en: "Latin social club for 20s and 30s across Busan, Changwon, and Daegu, welcoming absolute beginners to enjoy salsa and bachata, stay connected on social media, and build friendships through dance."
    },
    image: "assets/images/feeldance.png",
    imageAlt: {
      ko: "필댄스 로고",
      en: "Feel Dance logo"
    },
    links: [
      { type: "instagram", url: "https://www.instagram.com/feel_dance_korea/" },
      { type: "cafe", url: "https://cafe.naver.com/fdsalsa" }
    ]
  }
];
