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
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    'gatsby-transformer-sharp', 
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`
      },
    },
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        crumbLabelUpdates: [
          {
            pathname: '/information-support',
            crumbLabel: 'Information and Support'
          },
          {
            pathname: '/information-support/exercise-classes',
            crumbLabel: 'Exercise Classes'
          },
          {
            pathname: '/join',
            crumbLabel: 'How to Join'
          },
          {
            pathname: '/about',
            crumbLabel: 'About Us'
          }
        ],
      }
    }
  ],
}