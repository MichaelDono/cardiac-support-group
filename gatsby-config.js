module.exports = {
  siteMetadata: {
    title: `Sunderland Cardiac Support Group`,
    description: `We are a registered charity run by volunteers dedicated to providing help and support to the people of Sunderland and the surrounding districts who have or have suffered from some form of cardiac trauma. We provide exercise classes, walks, social evenings and much more.`,
    author: `Michael Dono`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    }
  ],
}