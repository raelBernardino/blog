import React, { useState } from "react"
import { Nav, Home, ImageBackground, RecentBlog } from '../components'

import '../styles.scss'
import { BlogWrapper } from "../components/Container"

const IndexPage = () => {
  const [blogIsDisplayed, setBlogIsDisplayed] = useState(false)
  const [blogDisplay, setBlogDisplay] = useState('none')

  function displayBlog() {
    setBlogDisplay('flex')
  }

  return (
    <div className="wrapper-outer" style={{ display: "flex", flexDirection: "column" }}>
      <div className="wrapper">
        <Nav />
        <ImageBackground />
        <Home
          displayBlog={displayBlog}
        />
      </div>
      <BlogWrapper id="recent-blog">
        <RecentBlog/>
      </BlogWrapper>
    </div>
  )
}

export default IndexPage