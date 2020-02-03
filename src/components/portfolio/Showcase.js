import React from 'react'

export default ({ projects }) => {
  console.log(projects)
  return (
    <div className="showcase">
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
  )
}