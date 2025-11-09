(function initializeFilterUtils(root) {
  const normalizeRegionValue = (value, regionsAllLabel) => {
    if (!value) {
      return "all";
    }

    if (value === "all" || value === regionsAllLabel) {
      return "all";
    }

    return value;
  };

  const matchesFilters = (venue, filters, locale) => {
    const { region, search } = filters;

    if (region && region !== "all" && venue.region[locale] !== region) {
      return false;
    }

    if (search) {
      const target = [
        venue.name[locale],
        venue.region[locale],
        venue.city[locale],
        venue.summary[locale]
      ]
        .join(" ")
        .toLowerCase();

      if (!target.includes(search)) {
        return false;
      }
    }

    return true;
  };

  const formatCount = (count, strings) =>
    count === 0 ? strings.countEmpty : strings.count(count);

  const isCityRepeatedInAddress = (cityLabel = "", addressLabel = "") => {
    if (!cityLabel || !addressLabel) {
      return false;
    }

    const tokens = cityLabel.split(/\s+/).filter(Boolean);
    if (!tokens.length) {
      return false;
    }

    const lowerAddress = addressLabel.toLowerCase();
    return tokens.every((token) => lowerAddress.includes(token.toLowerCase()));
  };

  const shuffleArray = (items) => {
    for (let i = items.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = items[i];
      items[i] = items[j];
      items[j] = temp;
    }
    return items;
  };

  const filterUtils = {
    normalizeRegionValue,
    matchesFilters,
    formatCount,
    isCityRepeatedInAddress,
    shuffleArray
  };

  if (root) {
    root.FilterUtils = filterUtils;
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = filterUtils;
  }
})(typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : this);
