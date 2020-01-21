import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button } from './styled/Button'
import Img from 'gatsby-image'
import Canes from '../assets/canes.jpg'
import Park from '../assets/park.jpg'

const BlogCardContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  font-weight: 100;
  `

export default ({ blog, i }) => {
  const state = [Canes, Park]
  console.log(blog)
  return (
    <BlogCardContainer>
      <div className="blog-card__image" style={{ backgroundImage: `url(${blog.node.frontmatter.featuredImage.childImageSharp.fluid.src})` }} >
        {/* <Img className="blog-card__image" fluid={blog.node.frontmatter.featuredImage.childImageSharp.fluid.src}/> */}
        <div className="blog-card__inner">
          <h4 className="blog-card__title inner-item">{blog.node.frontmatter.title}</h4>
          <h4 className="blog-card__date inner-item">{blog.node.frontmatter.date}</h4>
          <h4 className="blog-card__description inner-item">{blog.node.frontmatter.preview}</h4>
          {/* <span className="blog-card__date inner-item">{blog.frontmatter.date}</span> */}
          {/* <span className="blog-card__description inner-item">{blog.content}</span> */}
          <Link to={blog.node.frontmatter.path}>
            <Button className="blog-card__button inner-item">
              READ
              </Button>
          </Link>
        </div>
      </div>
      {/* </Img> */}
    </BlogCardContainer>
  )
}