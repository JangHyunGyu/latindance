(function () {
  if (!Array.isArray(window.VENUES) || !window.VENUES.length) {
    return;
  }

  var htmlLang = document.documentElement.getAttribute('lang') || 'ko';
  var isEnglish = htmlLang.toLowerCase().indexOf('en') === 0;
  var langKey = isEnglish ? 'en' : 'ko';

  var canonicalTag = document.querySelector('link[rel="canonical"]');
  var canonicalHref = canonicalTag ? canonicalTag.getAttribute('href') : window.location.href;
  var baseUrl = canonicalHref.replace(/#.*$/, '');

  var styleLabels = {
    salsa: { ko: '살사', en: 'Salsa' },
    bachata: { ko: '바차타', en: 'Bachata' },
    kizomba: { ko: '키좀바', en: 'Kizomba' },
    zouk: { ko: '주크', en: 'Zouk' },
    linedance: { ko: '라인댄스', en: 'Line Dance' },
    brazilianjuke: { ko: '브라질 주크', en: 'Brazilian Zouk' },
    bachatajuke: { ko: '바차타 주크', en: 'Bachata Zouk' }
  };

  var listName = isEnglish
    ? 'Korea Latin Dance Venues Directory'
    : '대한민국 라틴댄스 커뮤니티 디렉터리';

  var countryName = isEnglish ? 'South Korea' : '대한민국';
  var pageId = baseUrl + '#page';

  function slugify(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/[^a-z0-9가-힣]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'region';
  }

  function pickPrimaryLink(venue) {
    if (!Array.isArray(venue.links)) {
      return null;
    }

    var preferredOrder = ['website', 'cafe', 'facebook', 'instagram', 'band', 'youtube'];
    for (var i = 0; i < preferredOrder.length; i += 1) {
      var typeKey = preferredOrder[i];
      for (var j = 0; j < venue.links.length; j += 1) {
        if (venue.links[j] && venue.links[j].type === typeKey) {
          return venue.links[j].url;
        }
      }
    }

    return venue.links[0] && venue.links[0].url ? venue.links[0].url : null;
  }

  var listItems = window.VENUES.map(function (venue, index) {
    var itemUrl = pickPrimaryLink(venue) || (baseUrl + '#' + venue.id);
    var styles = Array.isArray(venue.styles)
      ? venue.styles.map(function (styleKey) {
          var label = styleLabels[styleKey];
          return label ? label[langKey] : styleKey;
        }).filter(Boolean)
      : [];

    var addressText = venue.address && venue.address[langKey] ? venue.address[langKey] : '';
    var localityText = venue.city && venue.city[langKey] ? venue.city[langKey] : '';
    var regionText = venue.region && venue.region[langKey] ? venue.region[langKey] : '';

    var sameAsLinks = Array.isArray(venue.links)
      ? venue.links.map(function (link) { return link.url; }).filter(Boolean)
      : [];

    var itemGraph = {
      '@type': 'LocalBusiness',
      'name': venue.name && venue.name[langKey] ? venue.name[langKey] : venue.id,
      'description': venue.summary && venue.summary[langKey] ? venue.summary[langKey] : '',
      'url': itemUrl,
      'mainEntityOfPage': baseUrl + '#' + venue.id,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': addressText,
        'addressLocality': localityText,
        'addressRegion': regionText,
        'addressCountry': countryName
      },
      'areaServed': regionText || countryName,
      'knowsAbout': styles
    };

    if (sameAsLinks.length) {
      itemGraph.sameAs = sameAsLinks;
    }

    return {
      '@type': 'ListItem',
      'position': index + 1,
      'url': baseUrl + '#' + venue.id,
      'item': itemGraph
    };
  });

  var itemListData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': listName,
    'numberOfItems': listItems.length,
    'itemListOrder': 'https://schema.org/ItemListOrderAscending',
    'itemListElement': listItems
  };

  var regionMap = window.VENUES.reduce(function (acc, venue) {
    var regionName = venue.region && venue.region[langKey]
      ? venue.region[langKey]
      : countryName;
    if (!acc[regionName]) {
      acc[regionName] = [];
    }
    acc[regionName].push(venue);
    return acc;
  }, {});

  var regionCollections = Object.keys(regionMap).map(function (regionName) {
    var venuesInRegion = regionMap[regionName];
    var slug = slugify(regionName);
    var regionId = baseUrl + '#region-' + slug;
    return {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': regionId,
      'name': isEnglish
        ? regionName + ' Latin dance clubs'
        : regionName + ' 라틴댄스 모임',
      'url': regionId,
      'inLanguage': isEnglish ? 'en-US' : 'ko-KR',
      'isPartOf': { '@id': pageId },
      'description': isEnglish
        ? 'Directory of salsa, bachata, and kizomba communities operating in ' + regionName + '.'
        : regionName + '에서 활동하는 살사·바차타·키좀바 커뮤니티 모음입니다.',
      'about': {
        '@type': 'Place',
        'name': regionName,
        'address': {
          '@type': 'PostalAddress',
          'addressRegion': regionName,
          'addressCountry': countryName
        }
      },
      'itemListElement': venuesInRegion.map(function (venue, idx) {
        return {
          '@type': 'ListItem',
          'position': idx + 1,
          'name': venue.name && venue.name[langKey] ? venue.name[langKey] : venue.id,
          'url': baseUrl + '#' + venue.id
        };
      })
    };
  });

  var siteNavData = {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    'name': isEnglish
      ? 'Korea Latin Dance Hub navigation'
      : '지역별 라틴댄스 모임 내비게이션',
    'url': baseUrl,
    'about': countryName,
    'hasPart': [
      {
        '@type': 'WebPage',
        'name': isEnglish ? 'Korean directory' : '한국어 디렉터리',
        'url': 'https://latindance.kr/'
      },
      {
        '@type': 'WebPage',
        'name': isEnglish ? 'English directory' : '영문 디렉터리',
        'url': 'https://latindance.kr/index-en.html'
      },
      {
        '@type': 'WebPage',
        'name': isEnglish ? 'Latin dance link collection' : '라틴댄스 링크 모음',
        'url': baseUrl + '#venue-results'
      }
    ]
  };

  var faqData;
  if (isEnglish) {
    faqData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What information does latindance.kr highlight?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'latindance.kr highlights official websites, Instagram, YouTube, Naver Cafe, and map links for salsa, bachata, kizomba, and Brazilian zouk communities across Seoul, Busan, Daegu, Daejeon, and Jeju.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Is it beginner friendly for salsa or bachata?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. The bilingual filters surface after-work socials, 20s–40s clubs, and introductory courses so new dancers can pick a studio without pressure and contact instructors directly.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How do I suggest a new Korean Latin dance club?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Email hyungyu@archerlab.dev with your club name, city, and social links. Verified listings are added to latindance.kr and included in the structured directory feeds that search engines read.'
          }
        }
      ]
    };
  } else {
    faqData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
              'name': 'latindance.kr에서는 어떤 라틴댄스 정보를 찾을 수 있나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
                'text': 'latindance.kr은 서울, 부산, 대구, 경남, 제주까지 살사·바차타·키좀바·주크 동호회의 공식 사이트, 인스타그램, 유튜브, 네이버 카페, 지도 링크를 한 번에 비교할 수 있는 디렉터리입니다.'
          }
        },
        {
          '@type': 'Question',
              'name': '살사나 바차타를 처음 배우는 사람도 latindance.kr로 시작할 수 있나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
                'text': '지역·장르 필터와 검색창에 도시나 키워드를 입력하면 초보 전용 강습, 2040 직장인 동호회, 주말 소셜 일정까지 UI 변경 없이 확인하고 담당자에게 바로 문의할 수 있습니다.'
          }
        },
        {
          '@type': 'Question',
              'name': '새로운 라틴댄스 모임을 제보하거나 연락처를 업데이트하려면?',
          'acceptedAnswer': {
            '@type': 'Answer',
                'text': 'hyungyu@archerlab.dev 로 모임명, 도시, SNS·지도 링크를 보내주시면 검토 후 latindance.kr 구조화 데이터와 디렉터리에 반영되어 검색엔진에도 함께 노출됩니다.'
          }
        }
      ]
    };
  }

  function injectStructuredData(dataObject) {
    if (!dataObject) {
      return;
    }
    var script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(dataObject);
    document.head.appendChild(script);
  }

  injectStructuredData(itemListData);
  regionCollections.forEach(injectStructuredData);
  injectStructuredData(siteNavData);
  injectStructuredData(faqData);
})();
