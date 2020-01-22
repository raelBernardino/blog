import React from 'react'
import { Link, graphql } from 'gatsby'
import { Footer } from './index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import Canes from '../assets/canes.jpg'
import '../styles/blogtemplate.scss'
import '../styles/footer.scss'

export default ({ data }) => {
  console.log(data)
  const post = data.markdownRemark
  console.log(post.frontmatter.image)
  console.log(Canes)
  return (
    <div className="blog-template">
      <Link to="/blogs">
        <FontAwesomeIcon
          className="blog-template__return"
          icon={faArrowAltCircleLeft} />
      </Link>
      <div className="blog-template__image" style={{ backgroundImage: `url(${post.frontmatter.featuredImage.childImageSharp.fluid.src})` }} />
      {/* <Img className="blog-template__image" fluid={post.frontmatter.featuredImage.childImageSharp.fluid.src}/> */}
      <div className="blog-template__container">
        <h3 className="blog-card__title">{post.frontmatter.title}</h3>
        <span className="blog-card__date">{post.frontmatter.date}</span>
        <span
          className="blog-template__content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <Footer />
    </div >
  )
}

export const blogContentQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path : { eq: $path } }) {
      html
        frontmatter {
          path
          title
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
`
