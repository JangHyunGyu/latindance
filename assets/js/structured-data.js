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

  var faqData;
  if (isEnglish) {
    faqData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What does Latin Dance Hub provide?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Latin Dance Hub curates official websites, social media links, and community channels for salsa, bachata, kizomba, and other Latin dance groups across South Korea.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How do I find Latin dance socials in a specific city?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Use the region filter or type a city name into the search bar to see clubs, studios, and socials operating in that location.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Can I submit a new Latin dance club or event?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. Send your club or event details to hyungyu@archerlab.dev and the directory will be updated after verification.'
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
          'name': '라틴댄스 허브에서는 어떤 정보를 찾을 수 있나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '라틴댄스 허브는 전국 살사, 바차타, 키좀바 등 라틴댄스 동호회와 클럽의 공식 사이트, SNS, 커뮤니티 채널을 한 곳에 모아 제공합니다.'
          }
        },
        {
          '@type': 'Question',
          'name': '특정 도시의 라틴댄스 소셜을 어떻게 찾나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '필터에서 지역을 선택하거나 검색창에 도시 이름을 입력하면 해당 지역에서 활동 중인 클럽과 소셜 정보를 확인할 수 있습니다.'
          }
        },
        {
          '@type': 'Question',
          'name': '새로운 라틴댄스 모임을 제보할 수 있나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '가능합니다. hyungyu@archerlab.dev 로 모임 정보를 보내주시면 검토 후 디렉터리에 추가됩니다.'
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
  injectStructuredData(faqData);
})();
