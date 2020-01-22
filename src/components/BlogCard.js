import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button } from './styled/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
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

export default ({ blog }) => {
  console.log(blog)
  return (
    <BlogCardContainer>
      <div className="blog-card__image" style={{ backgroundImage: `url(${blog.node.frontmatter.featuredImage.childImageSharp.fluid.src})` }} >
        <Link to="/">
          <FontAwesomeIcon
            className="blog-template__return"
            style={{ left: "7%" }}
            icon={faArrowAltCircleLeft} />
        </Link>
        <div className="blog-card__inner">
          <h4 className="blog-card__title inner-item">{blog.node.frontmatter.title}</h4>
          <h4 className="blog-card__date inner-item">{blog.node.frontmatter.date}</h4>
          <h4 className="blog-card__description inner-item">{blog.node.frontmatter.preview}</h4>
          <Link to={blog.node.frontmatter.path}>
            <Button className="blog-card__button inner-item">
              READ
              </Button>
          </Link>
        </div>
      </div>
    </BlogCardContainer>
  )
}