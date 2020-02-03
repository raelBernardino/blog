import React from 'react'
import { Link } from 'gatsby'

export default () => {
  return (
    <div className="intro">
      <div className="intro-nav">
        <Link
          className="intro-text intro-nav__text"
          to="/blogs">
          Blog
        </Link>
        <Link
          className="intro-text intro-nav__text"
          to="/portfolio">
          Portfolio
        </Link>
      </div>
      <h1 className="intro-header">I am Rael</h1>
      <span className="intro-text">A Front End Web Developer</span>
    </div>
  )
}