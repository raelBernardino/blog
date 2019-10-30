import React from "react"
import {  Nav, ImageBackground, Home } from '../components'

import '../styles.scss'

const IndexPage = () => {
  return (
    <div className="wrapper">
      <Nav />
      <ImageBackground />
      <Home />
    </div>
  )
}

export default IndexPage