module.exports = function getQueryOptions(options) {
  if (!options) return {} 

  const getPagination = (options) => {
    return {
      skip: options.pagination?.skip || 0,
      take: options.pagination?.take || 10,
    };
  };

  const getSorting = (options) => {
    if (!options?.sort) return {};

    return {
      orderBy: {
        [options.sort.field]: options.sort.order.toLowerCase(),
      },
    };
  };

  return {
    ...getPagination(options),
    ...getSorting(options),
  };
};
