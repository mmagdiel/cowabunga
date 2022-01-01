/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const process = require("dotenv").config()

module.exports = {
  /* Your site config here */
  siteMetadata: {
    root: process.parsed.API_URL,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tsconfig-paths`,
    `gatsby-plugin-svgr`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
