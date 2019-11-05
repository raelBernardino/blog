import React, { useState } from "react"
import { Nav, Home, ImageBackground, RecentBlog } from '../components'

import '../styles.scss'
import { BlogWrapper } from "../components/Container"

const IndexPage = () => {
  const [blogIsDisplayed, setBlogIsDisplayed] = useState(false)
  const [blogDisplay, setBlogDisplay] = useState('none')
  const [recentBlogLink, setRecentBlogLink] = useState("")

  function displayBlog() {
    setBlogDisplay('flex')
    setRecentBlogLink('/#recent-blog')
  }

  return (
    <div className="wrapper-outer" style={{ display: "flex", flexDirection: "column" }}>
      <div className="wrapper">
        <Nav />
        <ImageBackground />
        <Home
          displayBlog={displayBlog}
          recentBlogLink={recentBlogLink}
        />
      </div>
      <BlogWrapper
        style={{ display: 'flex' }}>
        <RecentBlog />
      </BlogWrapper>
    </div>
  )
}

export default IndexPage