import React from 'react'
import { Link } from 'gatsby'
import { Button } from './Button'
import { ArticleHeader, ArticleText, HeaderTag, VerseHeader, VerseText } from './Text'

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    speed: 1500
  })
}

export default ({
  displayBlog
}) => {
  return (
    <div className="wrapper-left">
      <div className="home-container">
        <div className="home-header-container">
          <ArticleHeader>The Days of Your Youth</ArticleHeader>
          <HeaderTag>Rael Bernardino</HeaderTag>
        </div>
        <div className="home-description__container">
          <ArticleText>A platform created to log moments and experiences in my life. I'll be writing things down relevant to God, family, friends, coding, rock climbing, and any other possibly exciting thing that happens to me. Stay tuned.</ArticleText>
        </div>
        <div className="home-verse__container">
          <div className="home-verse__content">
            <VerseHeader>Ecclesiastes 12:1</VerseHeader>
            <VerseText>"Remember also your Creator in the days of your youth, before the evil days come and the years draw near of which you will say, “I have no pleasure in them”"</VerseText>
          </div>
        </div>
        <Link
          // onClick={displayBlog}
          to="/#recent-blog"
        >
          <Button>Explore</Button>
        </Link>
      </div>
    </div>
  )
}