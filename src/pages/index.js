import React, { useState, useEffect } from 'react'
import { Intro, About, Showcase, Loading, SEO } from '../components/'
import '../styles/landing.scss'
import '../styles/portfolio.scss'
import '../styles/about.scss'
import '../styles/intro.scss'
import LegUp from '../assets/legup.jpg'
import OCW from '../assets/worship.jpg'
if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
  })
}

export default () => {
  const [isLoading, setIsLoading] = useState(true)
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <div className="wrapper-outer" style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {
        isLoading ?
          <Loading />
          :
          <div className="container">
            <SEO />
            <Intro />
            <About />
            {/* <Showcase projects={projects} /> */}
            <div className="showcase-text-container">
              <h1 className="about-header about-header__smaller">HELP <span className="highlighted">JUMPSTART</span> MY CAREER</h1>
              <span className="intro-content__text intro-content__text-grey">HIRE ME</span>
              <span className="intro-content__text">So are you starting a business, want to create an app, or simply just want a website?</span>
              <span className="intro-content__text">Let me be a part of something amazing.</span>
              <br />
              <span className="intro-content__text intro-content__text-grey">CONTACT ME</span>
              <span className="intro-content__text intro-content__text-orange">bernardino1207@gmail.com</span>
              <span className="intro-content__text intro-content__text-orange">323.384.3690</span>
            </div>
          </div>
      }
    </div >
  )
}