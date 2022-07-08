/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const withSvgr = require("next-svgr");

module.exports = withSvgr({
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ];
  },
});
