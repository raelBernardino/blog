import React from 'react'
import { Nav, Blogs } from '../components/'
import { graphql } from 'gatsby'
import '../styles/styles.scss'
import '../styles/blogtemplate.scss'
import '../styles/footer.scss'

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark
  console.log(edges)
  return (
    <div className="wrapper-outer" style={{ display: "flex", flexDirection: "column" }}>
      <div className="wrapper">
        <Blogs
          edges={edges}
        />
      </div>
    </div>
  )
}

export const query = graphql`
  query AllBlogsQuery {
    allMarkdownRemark (
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            preview
            featuredImage {
            childImageSharp {
              fluid(quality: 100) {
                src
                ...GatsbyImageSharpFluid
              }
            }
          }
          }
        }
      }
    }
  }`