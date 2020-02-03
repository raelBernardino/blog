import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { IntroPanel, Showcase } from '../components/portfolio/'
import LegUp from '../assets/legup.jpg'
import OCW from '../assets/worship.jpg'
import '../styles/portfolio.scss'

export default () => {
  const [projects, setProjects] = useState([
    {
      title: 'Leg Up Los Angeles',
      description: 'ReactJS/GatsbyJS',
      thumbnail: LegUp,
      link: 'https://legupla.netlify.com'
    },
    {
      title: 'OCW Church',
      description: 'ReactJS/GatsbyJS',
      thumbnail: OCW,
      link: 'https://ocwchurch.netlify.com'
    }
  ])
  return (
    <div className="portfolio">
      <Link to="/">
        <FontAwesomeIcon
          className="blog-template__return portfolio-return"
          icon={faArrowAltCircleLeft} />
      </Link>
      <IntroPanel />
      <Showcase projects={projects}/>
    </div>
  )
}