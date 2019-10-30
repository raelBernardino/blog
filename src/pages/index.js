import React from "react"
import {  Nav, Image, Home } from '../components'

import '../styles.scss'

const IndexPage = () => {
  return (
    <div className="wrapper">
      <Nav />
      <Image />
      <Home />
    </div>
  )
}

export default IndexPage