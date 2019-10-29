import React from 'react'
import { Link } from 'gatsby'

export default function () {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="nav-container__links">
          <Link
            className="nav-links"
            activeClassName="nav-links__active"
            to="/"
          >
            Home
          </Link>
          <Link
            className="nav-links"
            activeClassName="nav-links__active"
            to="/comingsoon"
            >
            About
          </Link>
          <Link
            className="nav-links"
            activeClassName="nav-links__active"
            to="/comingsoon"
          >
            Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}