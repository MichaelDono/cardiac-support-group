module.exports = {
  siteMetadata: {
    title: `Sunderland Cardiac Support Group`,
    description: `We are a registered charity run by volunteers dedicated to providing help and support to the people of Sunderland and the surrounding districts who have or have suffered from some form of cardiac trauma. We provide exercise classes, walks, social evenings and much more.`,
    author: `Michael Dono`,
    phone: `0191 5656892`,
    email: `hello@sunderlandcardiac.org.uk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   // keep as first gatsby-source-filesystem plugin for gatsby image support
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/static/img`,
    //     name: 'uploads',
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-plugin-sharp`,
    'gatsby-transformer-sharp', 
    'gatsby-transformer-remark',
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: [
    //       'gatsby-remark-relative-images',
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: { },
    //       }
    //     ],
    //   },
    // },
    'gatsby-plugin-netlify-cms'
  ],
}