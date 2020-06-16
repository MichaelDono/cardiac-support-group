const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
// const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    // fmImagesToRelative(node) // convert image paths for gatsby images
    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
        name: `slug`,
        node,
        value,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const { createPage } = actions
    const result = await graphql(`
    query {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        templateKey
                      }
                }
            }
        }
    }
    `)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.templateKey) {
        createPage({
          path: node.fields.slug,
          component: path.resolve(
            `src/templates/${String(node.frontmatter.templateKey)}.js`
          ),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      }
    })
}