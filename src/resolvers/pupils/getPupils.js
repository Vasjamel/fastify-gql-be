const { PUPILS_INCLUDE } = require('../utils/includes.js');
const getQueryOptions = require('../utils/options.js')

module.exports = async function getPupils(_parent, { find, options = {} }, ctx) {
  console.log('options', options)
  return ctx.prisma.pupil.findMany({ where: find, include: PUPILS_INCLUDE, ...getQueryOptions(options) });
}
