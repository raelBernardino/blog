import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

export default () => {
  return (
    <div className="intro">
      <div className="intro-content">
        <div className="intro-content__photo" />
        <h1 className="intro-content__header">HELLO,<br />I'M <span className=" intro-content__header highlighted">RAEL</span></h1>
        <span className="intro-content__text">I'm a Front End Web Developer and I can help you design and create your very own website.</span>
        <a href="/#about" className="intro-content__icon">
          <FontAwesomeIcon icon={faSortDown} className="intro-content__icon" size="sm" />
        </a>
      </div>
    </div>
  )
}