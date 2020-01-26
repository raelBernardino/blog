import React from 'react'

export default () => {
  return (
    <div className="showcase">
      <div className="showcase-project">
        <div className="showcase-project__thumbnail" />
        <div className="showcase-project__description">
          <span className="showcase-project__description-header">Leg Up Los Angeles</span>
          <span className="showcase-project__description-date">Jauary 25, 2020</span>
          <span className="showcase-project__description-text">A website built for a nonprofit organization. The frontend stack: ReactJS, SCSS, Gatsby, and GraphQL.</span>
          <a
            className="button-link"
            href="https://wonderful-tereshkova-291ac1.netlify.com">
            <button className="landing-left__button">
              VISIT SITE
          </button>
          </a>
        </div>
      </div>
    </div>
  )
}