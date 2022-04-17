const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const webpack = require(`webpack`)

exports.createPages = async ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const { createPage } = actions
    const result = await graphql(`
    query {
      allGhostPage {
        edges {
          node {
            slug
          }
        }
      }
      allGhostPost(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
          }
        }
      }
    }
    `)
    result.data.allGhostPage.edges.forEach(({ node }) => {
        node.url = `/${node.slug}/`
        if (node.slug == "index") {
          node.url = "/"
        }
        createPage({
          path: node.url,
          component: path.resolve(
            `src/templates/${String(node.slug)}.js`
          ),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.slug,
          },
        })
    })
    result.data.allGhostPost.edges.forEach(({ node }) => {
      node.url = `/${node.slug}/`
      createPage({
        path: node.url,
        component: path.resolve(
          `src/templates/news-post.js`
        ),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug,
        },
      })
  })
}
