import React from "react"
import {  Nav, Home, ImageBackground } from '../components'

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