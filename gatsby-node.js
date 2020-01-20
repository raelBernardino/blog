const path = require('path')

exports.createPages = (({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/components/BlogTemplate.js')

    resolve(
      graphql(
        `
        query {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }`
      ).then(result => {
        if(resolve.errors) {
          return Promise.reject(resolve.errors)
        }
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const path = node.frontmatter.path
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path
            }
          })
        })
      })
    )
  })
})