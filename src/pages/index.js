import React from 'react'
import { Intro } from '../components/'
import '../styles/landing.scss'
import '../styles/portfolio.scss'
import '../styles/intro.scss'

export default () => {
  return (
    <div className="wrapper-outer" style={{ display: "flex", flexDirection: "column" }}>
      {/* <Landing /> */}
      <Intro />
    </div>
  )
}