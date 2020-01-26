import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { IntroPanel, Showcase } from '../components/portfolio/'
import '../styles/portfolio.scss'

export default () => {
  const [projects, setProjects] = useState([])
  return (
    <div className="portfolio">
      <Link to="/">
        <FontAwesomeIcon
          className="blog-template__return portfolio-return"
          icon={faArrowAltCircleLeft} />
      </Link>
      <IntroPanel />
      <Showcase />
    </div>
  )
}