const SEOUL_VENUES = [
  {
    id: "seoul-everlatin",
    name: { ko: "에버라틴", en: "Everlatin" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 강남구", en: "Gangnam-gu" },
    address: {
      ko: "서울특별시 강남구 테헤란로6길 9 B1, B2",
      en: "B1-B2, 9 Teheran-ro 6-gil, Gangnam-gu, Seoul"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "강남과 홍대 센터 간에 강습 교차 수강 시스템을 운영하여 회원들의 편의성을 높이고 살사, 바차타 등 라틴 댄스를 체계적으로 가르치고 활발한 소셜 모임을 주최하는 아카데미형 2030 직장인 동호회입니다.",
      en: "Academy-style community for working professionals in their 20s and 30s that offers cross-enrollment between its Gangnam and Hongdae centers, delivering structured salsa and bachata training alongside active social gatherings."
    },
    image: "assets/images/ever_latin.png",
    imageAlt: {
      ko: "에버라틴 로고",
      en: "Everlatin logo"
    },
    links: [
      { type: "homepage", url: "https://everlatin.com/" },
      { type: "youtube", url: "https://www.youtube.com/@korealatindancetv1260" },
      { type: "instagram", url: "https://www.instagram.com/clublatin_everlatin/" },
      { type: "cafe", url: "https://m.cafe.daum.net/kwbsht/" }
    ]
  },
  {
    id: "seoul-latinsoul",
    name: { ko: "라틴소울", en: "Latin Soul" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 마포구", en: "Mapo-gu" },
    address: {
      ko: "서울특별시 마포구 동교로 191 지하 1층",
      en: "B1, 191 Donggyo-ro, Mapo-gu, Seoul"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "춤에 대한 열정을 바탕으로 다양한 사람들이 모여 살사, 바차타 등 라틴 댄스를 배우고 즐기며 활발하게 교류하는 친목 모임입니다.",
      en: "Community of passionate dancers who gather in Seoul to learn, enjoy, and connect through salsa, bachata, and other Latin dances."
    },
    image: "assets/images/latin_soul.png",
    imageAlt: {
      ko: "라틴소울 로고",
      en: "Latin Soul logo"
    },
    links: [
      { type: "instagram", url: "https://www.instagram.com/latinsoul_salsa/" }
    ]
  },
  {
    id: "seoul-withlatin",
    name: { ko: "위드라틴", en: "With Latin" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 강남구", en: "Gangnam-gu" },
    address: {
      ko: "서울특별시 강남구 강남대로84길 24-4 지하 1층",
      en: "B1, 24-4 Gangnam-daero 84-gil, Gangnam-gu, Seoul"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "2040 직장인 중심의 라틴 댄스 동호회로 '전 세계에서 가장 쉬운 커리큘럼'을 표방하며, 춤을 처음 접하는 왕초보도 부담 없이 시작할 수 있도록 돕습니다.",
      en: "Latin dance community for office workers in their 20s to 40s, promoting the 'easiest curriculum in the world' so absolute beginners can start salsa and bachata without pressure."
    },
    image: "assets/images/with_latin.png",
    imageAlt: {
      ko: "위드라틴 로고",
      en: "With Latin logo"
    },
    links: [
      { type: "youtube", url: "https://www.youtube.com/@withlatindance" },
      { type: "instagram", url: "https://www.instagram.com/with_latin_bachata/" },
      { type: "cafe", url: "https://m.cafe.naver.com/ilikemake/1168" },
      { type: "band", url: "https://www.band.us/@withlatin" }
    ]
  },
  {
    id: "seoul-latinparadise",
    name: { ko: "라틴파라다이스", en: "Latin Paradise" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 강남구", en: "Gangnam-gu" },
    address: {
      ko: "서울특별시 강남구 역삼동 831-34 B1",
      en: "B1, 831-34 Yeoksam-dong, Gangnam-gu, Seoul"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "강남 지역을 기반으로 활동하며 주로 강남역 인근의 제휴된 라틴 바나 연습실에서 정기 모임과 강습을 진행합니다.",
      en: "Based in Gangnam, it hosts regular meetups and classes at partnered Latin bars and practice studios near Gangnam Station."
    },
    image: "assets/images/latin_paradise.png",
    imageAlt: {
      ko: "라틴파라다이스 로고",
      en: "Latin Paradise logo"
    },
    links: [
      { type: "cafe", url: "https://cafe.daum.net/LP" },
      { type: "instagram", url: "https://www.instagram.com/latinparadise_lp/" }
    ]
  },
  {
    id: "seoul-turn",
    name: { ko: "턴", en: "Turn" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 강남구", en: "Gangnam-gu" },
    address: {
      ko: "서울특별시 강남구 역삼로3길 17 삼영빌딩 B1",
      en: "B1, Samyoung Building, 17 Yeoksam-ro 3-gil, Gangnam-gu, Seoul"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "2005년부터 운영된 강남턴으로도 알려진 라틴 클럽으로, 살사와 바차타의 성지라 불리며 실력 있는 댄서들이 모이는 곳입니다.",
      en: "Opened in 2005 and also known as Gangnam Turn, this Latin club is revered as a hub for salsa and bachata where advanced dancers gather."
    },
    image: "assets/images/turn.png",
    imageAlt: {
      ko: "턴 라틴 클럽 로고",
      en: "Turn Latin Club logo"
    },
    links: [
      { type: "cafe", url: "https://cafe.daum.net/turnsalsa" },
      { type: "instagram", url: "https://www.instagram.com/turn_latinclub_no.1/" }
    ]
  },
  {
    id: "seoul-bachazouk",
    name: { ko: "바차주크코리아", en: "Bachazouk Korea" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 강남구", en: "Gangnam-gu" },
    address: {
      ko: "서울특별시 강남구 테헤란로14길 29",
      en: "29 Teheran-ro 14-gil, Gangnam-gu, Seoul"
    },
  styles: ["bachatajuke"],
    summary: {
      ko: "바차타와 주크를 전문적으로 가르치고 보급하며 활발한 소셜댄스 문화와 커뮤니티 활동으로 두 장르의 매력을 전파하는 단체입니다.",
      en: "Group dedicated to teaching and promoting bachata and zouk while spreading both styles through vibrant social dance culture and community events."
    },
    image: "assets/images/bachazouk_korea.png",
    imageAlt: {
      ko: "바차주크코리아 로고",
      en: "Bachazouk Korea logo"
    },
    links: [
      { type: "youtube", url: "https://www.youtube.com/@soochata" },
      { type: "instagram", url: "https://www.instagram.com/bachazouk_korea/" }
    ]
  },
  {
    id: "seoul-zoukseoul",
    name: { ko: "주크서울", en: "Zouk Seoul" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 마포구", en: "Mapo-gu" },
    address: {
      ko: "서울특별시 마포구",
      en: "Mapo-gu, Seoul"
    },
    styles: ["brazilianjuke", "bachatajuke"],
    summary: {
      ko: "2016년 한국 최초로 시작된 주크 전문 모임으로, 브라질리언 주크를 보급하고 활성화하기 위해 정기 강습과 소셜 파티를 열며 주크 문화의 중심 역할을 합니다.",
      en: "Founded in 2016 as Korea's first dedicated zouk community, it leads the promotion of Brazilian zouk through regular classes and social parties while anchoring the local zouk scene."
    },
    image: "assets/images/zouk_seoul.png",
    imageAlt: {
      ko: "주크서울 로고",
      en: "Zouk Seoul logo"
    },
    linkDisplay: "chips",
    links: [
      { type: "cafe", url: "https://cafe.naver.com/zoukseoul" },
      {
        type: "instagram",
        url: "https://www.instagram.com/zoukseoul/",
        label: {
          ko: "인스타그램(공식)",
          en: "Instagram (Official)"
        }
      },
      {
        type: "instagramBachazouk",
        url: "https://www.instagram.com/bachazoukseoul/",
        label: {
          ko: "인스타그램(바차주크)",
          en: "Instagram (Bachazouk)"
        }
      },
      { type: "blog", url: "https://m.blog.naver.com/zoukseoul" },
      { type: "facebook", url: "https://www.facebook.com/people/zoukseoul/100080266793226/" },
      { type: "youtube", url: "https://www.youtube.com/@ZoukSeoul" }
    ]
  },
  {
    id: "seoul-sda",
    name: { ko: "SDA 살사댄스아카데미", en: "Salsa Dance Academy (SDA)" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 마포구", en: "Mapo-gu" },
    address: {
      ko: "서울특별시 마포구 동교동 199-1 현우빌딩",
      en: "Hyunwoo Building, 199-1 Donggyo-dong, Mapo-gu, Seoul"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "20년 이상의 전통을 가진 홍대 기반의 살사댄스 동호회로, 개인의 이익보다 회원들의 즐거운 친목 활동에 중점을 두고 운영하는 것이 특징입니다.",
      en: "Hongdae-based salsa community with over 20 years of history, prioritizing members' enjoyment and camaraderie over individual gain."
    },
    image: "assets/images/sda.png",
    imageAlt: {
      ko: "SDA 살사댄스아카데미 로고",
      en: "SDA Salsa Dance Academy logo"
    },
    links: [
      { type: "instagram", url: "https://www.instagram.com/salsadanceacademy.sda/" },
      { type: "cafe", url: "https://m.cafe.daum.net/sdamu" },
      { type: "facebook", url: "https://www.facebook.com/salsadanceacademy" }
    ]
  },
  {
    id: "seoul-lastdance",
    name: { ko: "라스트댄스", en: "Last Dance" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 마포구", en: "Mapo-gu" },
    address: {
      ko: "서울특별시 마포구",
      en: "Mapo-gu, Seoul"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "20~39세 회원들로 구성된 젊은 연령층과 기수별 체계적인 커리큘럼, MT와 파티 등을 포함한 다양한 교류 활동을 통해 춤과 친목을 동시에 즐길 수 있는 동호회입니다.",
      en: "Community for members aged 20 to 39 that combines cohort-based structured curricula with exchanges like retreats and parties, making it easy to enjoy both dancing and social bonding."
    },
    image: "assets/images/lastdance.png",
    imageAlt: {
      ko: "라스트댄스 로고",
      en: "Last Dance logo"
    },
    links: [
      { type: "cafe", url: "https://cafe.naver.com/lastdancepeople" },
      { type: "instagram", url: "https://www.instagram.com/lastdance_people/" }
    ]
  },
  {
    id: "seoul-bonita",
    name: { ko: "보니따", en: "Bonita" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 마포구", en: "Mapo-gu" },
    address: {
      ko: "서울특별시 마포구 동교로 191",
      en: "191 Donggyo-ro, Mapo-gu, Seoul"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "1999년부터 365일 매일 밤 살사, 바차타 등 다채로운 라틴 댄스 파티와 강습이 끊이지 않는 라틴 댄스의 성지이자 활기찬 소셜 클럽입니다.",
      en: "Since 1999, a legendary Latin dance hotspot hosting nightly salsa, bachata, and more with non-stop parties and lessons in a vibrant social club setting."
    },
    image: "assets/images/club_bonita.png",
    imageAlt: {
      ko: "보니따 로고",
      en: "Bonita logo"
    },
    links: [
      { type: "instagram", url: "https://www.instagram.com/jessica_latinclub_bonita/" },
      { type: "facebook", url: "https://www.facebook.com/clubbonitaseoul" },
      { type: "threads", url: "https://www.threads.com/@jessica_latinclub_bonita" }
    ]
  },
  {
    id: "seoul-latinaclass",
    name: { ko: "라틴 에이클래스", en: "Latin A Class" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 강남구", en: "Gangnam-gu, Seoul" },
    address: {
      ko: "서울특별시 강남구 테헤란로6길 9",
      en: "9 Teheran-ro 6-gil, Gangnam-gu, Seoul"
    },
    styles: ["salsa", "bachata", "kizomba"],
    image: "assets/images/latin_a.png",
    imageAlt: {
      ko: "라틴 에이클래스 로고",
      en: "Latin A Class logo"
    },
    imageFit: "contain",
    summary: {
      ko: "대한민국에서 가장 큰 규모의 라틴 댄스 클럽 및 동호회로, 살사, 바차타, 키좀바 등의 라틴 댄스를 즐기고 배울 수 있는 곳입니다.",
      en: "One of South Korea's largest Latin dance clubs and communities where dancers can learn and enjoy salsa, bachata, kizomba, and more."
    },
    links: [
      {
        type: "instagram",
        url: "https://www.instagram.com/latin_a_class/",
        label: {
          ko: "인스타그램(라틴에이클래스)",
          en: "Instagram (Latin A Class)"
        }
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/latin_gangnam/",
        label: {
          ko: "인스타그램(라틴강남)",
          en: "Instagram (Latin Gangnam)"
        }
      }
    ]
  },
  {
    id: "seoul-senbarico",
    name: { ko: "센바리코", en: "Senbarico" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 강남구", en: "Gangnam-gu, Seoul" },
    address: {
      ko: "서울특별시 강남구",
      en: "Gangnam-gu, Seoul"
    },
    styles: ["bachata"],
    image: "assets/images/senbarico.png",
    imageAlt: {
      ko: "센바리코 로고",
      en: "Senbarico logo"
    },
    imageFit: "contain",
    summary: {
      ko: "전세계적으로 유행하는 센슈얼 바차타를 배울 수 있는 강남 기반의 동호회로, 트렌디한 라틴 댄스를 배우고 즐길 수 있습니다.",
      en: "Gangnam-based community dedicated to the globally popular sensual bachata, offering a place to learn and enjoy this modern Latin dance style."
    },
    links: [
      { type: "instagram", url: "https://www.instagram.com/senbarico" },
      { type: "cafe", url: "https://cafe.daum.net/senbarico1" },
      { type: "youtube", url: "https://www.youtube.com/@ysenbaricobachata4010" },
      { type: "facebook", url: "https://www.facebook.com/senbarico/" }
    ]
  },
  {
    id: "seoul-salatindanceclub",
    name: { ko: "SA 살사 댄스 클럽", en: "SA Salsa Dance Club" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 마포구", en: "Mapo-gu" },
    address: {
      ko: "서울특별시 마포구 동교로 191",
      en: "191 Donggyo-ro, Mapo-gu, Seoul"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "하나의 특정 바에 고정되기보다는 홍대 일대 여러 바를 오가며 활동하는 지역 연합 동호회로, '초보자들의 성지'라 불릴 만큼 신규 회원 유입이 활발한 살사의 시작점입니다.",
      en: "Hongdae-based collective that rotates between multiple venues rather than one fixed bar, widely known as the 'sanctuary for beginners' where newcomers flock to start their salsa journey."
    },
    image: "assets/images/sa.png",
    imageAlt: {
      ko: "SA 살사 댄스 클럽 로고",
      en: "SA Salsa Dance Club logo"
    },
    links: [
      { type: "youtube", url: "https://www.youtube.com/@SALatinSalsaDanceClub" },
      { type: "instagram", url: "https://www.instagram.com/sa.latin.official/" },
      { type: "instagram", url: "https://www.instagram.com/saglobal.dance/" },
      { type: "cafe", url: "https://cafe.daum.net/salatin" },
      { type: "facebook", url: "https://www.facebook.com/salatinsalsadanceclub" },
      { type: "linktree", url: "https://linktr.ee/sa.latin.official" }
    ]
  },
  {
    id: "seoul-buenaonda",
    name: { ko: "부에나", en: "Buena" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 마포구", en: "Mapo-gu" },
    address: {
      ko: "서울특별시 마포구 동교로 217 LJ빌딩",
      en: "LJ Building, 217 Donggyo-ro, Mapo-gu, Seoul"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "라틴 문화를 사랑하는 사람들이 모여 언어와 춤을 배우고 문화를 체험하는 라틴 컬쳐 커뮤니티입니다.",
      en: "Latin culture community where enthusiasts gather to learn language, dance, and immerse themselves in Latin cultural experiences."
    },
    image: "assets/images/buena.png",
    imageAlt: {
      ko: "부에나 로고",
      en: "Buena logo"
    },
    links: [
      { type: "instagram", url: "https://www.instagram.com/hyunsookjane/" },
      { type: "cafe", url: "https://cafe.naver.com/buenaonda" }
    ]
  },
  {
    id: "seoul-hongturn",
    name: { ko: "홍턴", en: "Hong Turn" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 마포구", en: "Mapo-gu" },
    address: {
      ko: "서울특별시 마포구 동교동 199-3",
      en: "199-3 Donggyo-dong, Mapo-gu, Seoul"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "홍대에서 몇 안 되는 라틴 전문 클럽 중 하나로, 이색적인 경험이나 라틴 댄스에 관심 있는 사람들에게 인기 있는 라틴 클럽입니다.",
      en: "One of the few dedicated Latin clubs in Hongdae, popular with visitors seeking a distinctive experience or a deeper dive into Latin dance."
    },
    image: "assets/images/hongturn.png",
    imageAlt: {
      ko: "홍턴 로고",
      en: "Hong Turn logo"
    },
    links: [
      { type: "facebook", url: "https://www.facebook.com/people/Hong-Turn/100008483355636/" }
    ]
  },
  {
    id: "seoul-havana",
    name: { ko: "하바나", en: "Havana" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 마포구", en: "Mapo-gu" },
    address: {
      ko: "서울특별시 마포구 서교동 어울마당로 53 B1",
      en: "B1, 53 Eoulmadang-ro, Seogyo-dong, Mapo-gu, Seoul"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "20년이 넘는 역사를 지닌 정통 라틴 댄스 전문 클럽으로, 이국적인 분위기에서 살사와 바차타를 즐기고 배울 수 있는 곳입니다.",
      en: "Authentic Latin dance club with over 20 years of history where you can learn and enjoy salsa and bachata in an exotic atmosphere."
    },
    image: "assets/images/havana.png",
    imageAlt: {
      ko: "하바나 로고",
      en: "Havana logo"
    },
    links: [
      { type: "instagram", url: "https://www.instagram.com/club_havana/" }
    ]
  },
  {
    id: "seoul-macondo",
    name: { ko: "마콘도", en: "Macondo" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 마포구", en: "Mapo-gu" },
    address: {
      ko: "서울특별시 마포구 동교동 164-22",
      en: "164-22 Donggyo-dong, Mapo-gu, Seoul"
    },
    styles: ["salsa", "bachata", "kizomba"],
    summary: {
      ko: "한국 최초의 살사 클럽을 표방하며, 다양한 라틴 댄스를 즐길 수 있는 깔끔하고 분위기 좋은 전문 라틴 댄스 바입니다.",
      en: "Self-described as Korea's first salsa club, this polished Latin dance bar offers a welcoming atmosphere for enjoying a wide range of Latin dances."
    },
    image: "assets/images/macondo.png",
    imageAlt: {
      ko: "마콘도 로고",
      en: "Macondo logo"
    },
    links: [
      { type: "instagram", url: "https://www.instagram.com/macondo_hongdae/" },
      { type: "cafe", url: "https://cafe.daum.net/macondo" }
    ]
  },
  {
    id: "seoul-intothelatin",
    name: { ko: "라틴속으로", en: "Into the Latin" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 마포구", en: "Mapo-gu" },
    address: {
      ko: "서울특별시 마포구 동교로 191",
      en: "191 Donggyo-ro, Mapo-gu, Seoul"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "홍대를 중심으로 활발하게 운영되는, 오래된 역사와 체계적인 강습을 바탕으로 살사, 바차타 등의 라틴 댄스를 즐기는 대표적인 직장인/성인 취미 동호회입니다.",
      en: "Long-running Hongdae-based hobby circle for working adults, offering structured lessons and vibrant socials for enjoying salsa, bachata, and more."
    },
    image: "assets/images/latin_into.png",
    imageAlt: {
      ko: "라틴속으로 로고",
      en: "Into the Latin logo"
    },
    links: [
      { type: "cafe", url: "https://m.cafe.daum.net/intothesalsa" },
      { type: "instagram", url: "https://www.instagram.com/intothelatinittl/" },
      { type: "instagram", url: "https://www.instagram.com/into_the_latin/" },
      { type: "threads", url: "https://www.threads.com/@intothelatinittl?hl=ko" }
    ]
  },
  {
    id: "seoul-sulcorazon",
    name: { ko: "술꼬라손", en: "Sul Corazon" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울", en: "Seoul" },
    address: {
      ko: "서울특별시",
      en: "Seoul"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "'꼬라손'은 라틴 문화에서 '심장' 또는 '마음'을 뜻하며, 바차타를 중심으로 서울 지역에서 활동하는 라틴댄스 동호회입니다.",
      en: "Named after the Spanish word for heart, Sul Corazon is a Seoul-based Latin dance team and community centered on bachata while sharing broader Latin culture."
    },
    image: "assets/images/sulcorazon.png",
    imageAlt: {
      ko: "술꼬라손 로고",
      en: "Sul Corazon logo"
    },
    links: [
      { type: "instagram", url: "https://www.instagram.com/sulcorazon_/" },
      { type: "youtube", url: "https://www.youtube.com/@sulcorazon" }
    ]
  },
  {
    id: "seoul-latincielo",
    name: { ko: "라틴씨엘로", en: "Latin Cielo" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울", en: "Seoul" },
    address: {
      ko: "서울특별시",
      en: "Seoul"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "체계적인 직강과 활발한 2030 회원 커뮤니티를 통해 누구나 즐겁게 라틴 댄스를 배우고 친목을 다질 수 있는 전문 아카데미입니다.",
      en: "Professional academy led by dancer couple Sora and Dalkong, offering structured instruction and an energetic 20s/30s community so anyone can learn Latin dance while building friendships."
    },
    image: "assets/images/latin_cielo.png",
    imageAlt: {
      ko: "라틴씨엘로 로고",
      en: "Latin Cielo logo"
    },
    links: [
      { type: "homepage", url: "https://www.latincielo.com" },
      { type: "youtube", url: "https://www.youtube.com/@latincielo" },
      { type: "instagram", url: "https://www.instagram.com/latin_cielo/" },
      { type: "cafe", url: "https://cafe.naver.com/latinblack" }
    ]
  },
  {
    id: "seoul-narionbachata",
    name: { ko: "나리온 바차타", en: "Narion Bachata" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 강남구", en: "Gangnam-gu" },
    address: {
      ko: "서울특별시 강남구 역삼동 640-18 4층",
      en: "4F, 640-18 Yeoksam-dong, Gangnam-gu, Seoul"
    },
    styles: ["bachata"],
    summary: {
      ko: "한국 최초로 센슈얼 바차타를 도입하고 체계적으로 가르치기 시작한 아카데미입니다.",
      en: "Academy credited with introducing sensual bachata to Korea and providing structured training from day one."
    },
    image: "assets/images/narion.png",
    imageAlt: {
      ko: "나리온 바차타 로고",
      en: "Narion Bachata logo"
    },
    links: [
      { type: "youtube", url: "https://www.youtube.com/@_narison3107" },
      { type: "instagram", url: "https://www.instagram.com/nari_son_dancer/" },
      { type: "homepage", url: "https://litt.ly/sensualbachata" },
      { type: "linktree", url: "https://linktr.ee/Narionbachata" },
      { type: "cafe", url: "https://cafe.daum.net/salsainacademy" }
    ]
  },
  {
    id: "seoul-skdanceacademy",
    name: { ko: "SK댄스아카데미", en: "SK Dance Academy" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 마포구", en: "Mapo-gu, Seoul" },
    address: {
      ko: "서울특별시 마포구 와우산로29가길 13 2층",
      en: "2F, 13 Wausan-ro 29ga-gil, Mapo-gu, Seoul"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "많은 수의 초보자를 양성한 살사·바차타 전문 SK댄스아카데미는 체계적인 커리큘럼과 활발한 커뮤니티로 차별화된 댄스 문화를 선도합니다.",
      en: "SK Dance Academy has trained numerous beginners in salsa and bachata, leading a distinctive dance culture with its structured curriculum and vibrant community."
    },
    image: "assets/images/sk_academy.png",
    imageAlt: {
      ko: "SK댄스아카데미 로고",
      en: "SK Dance Academy logo"
    },
    links: [
      { type: "homepage", url: "http://sksalsa.com/" },
      { type: "youtube", url: "https://www.youtube.com/@skdanceacademy" },
      { type: "instagram", url: "https://www.instagram.com/skdance.academy/" },
      { type: "blog", url: "https://blog.naver.com/new_salsa" }
    ]
  },
  {
    id: "seoul-felizclub",
    name: { ko: "펠리스", en: "Feliz" },
    region: { ko: "서울", en: "Seoul" },
    city: { ko: "서울 마포구", en: "Mapo-gu" },
    address: {
      ko: "서울특별시 마포구 월드컵북로2길 57 지하 1층",
      en: "B1, 57 World Cup buk-ro 2-gil, Mapo-gu, Seoul"
    },
    styles: ["salsa", "bachata"],
    summary: {
      ko: "라틴 댄스를 배우고 즐길 수 있는 홍대의 대표적인 사교 클럽이자 종종 K-라틴 라이브 밴드 공연이나 특별한 댄스 이벤트가 열리기도 합니다.",
      en: "Signature Hongdae social club for learning and enjoying Latin dance, known for hosting K-Latin live band shows and special dance events."
    },
    image: "assets/images/feliz.png",
    imageAlt: {
      ko: "펠리스 로고",
      en: "Feliz logo"
    },
    links: [
      { type: "youtube", url: "https://www.youtube.com/@Felizclub" },
      { type: "instagram", url: "https://www.instagram.com/felizclub0701/" },
      { type: "cafe", url: "https://cafe.naver.com/felizclub" }
    ]
  }
];

if (typeof window !== "undefined") {
  window.SEOUL_VENUES = SEOUL_VENUES;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = SEOUL_VENUES;
}
