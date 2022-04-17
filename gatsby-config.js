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
    `gatsby-plugin-sass`,
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
    {
      resolve: `@michaeldono/gatsby-source-ghost`,
      options: {
        apiUrl: `https://ghost.sunderlandcardiac.org.uk`,
        contentApiKey: `0e3db64e62621ac06627dd1af4`,
        version: `v4`
      }
    },
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
            pathname: '/how-to-join',
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