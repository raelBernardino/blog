import React from 'react'

export default ({ projects }) => {
  return (
    <div className="showcase" id="projects">
      <div className="showcase-text-container">
        <h1 className="about-header about-header__bigger">MY <span className="highlighted">WORK</span> AT A GLANCE</h1>
        <span className="about-text intro-content__text">Here's a curation of my work that best exemplify my capabilities as a Web Developer.</span>
      </div>
      <div className="showcase-container">
        {
          projects.map(({ thumbnail, title, description, link }, i) => (
            <a
              className="showcase-project__overlay"
              href={link}
            >
              <div className="showcase-project"
                style={{
                  backgroundImage: `url(${thumbnail})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="showcase-project__overlay-hover">
                  <div className="showcase-project__description">
                    <span className="showcase-project__description-header">{title}</span>
                    <span className="showcase-project__description-text">{description}</span>
                    {/* <a
                className="button-link"
                href={project.link}
                >
                <button className="landing-left__button">VISIT SITE</button>
              </a> */}
                  </div>
                </div>
              </div>
            </a>
          ))
        }
      </div>
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
  )
}