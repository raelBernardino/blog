import React from 'react'
import { graphql } from 'gatsby'
import { Blogs } from '../components/index'

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Blogs
      edges={edges}
    />
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