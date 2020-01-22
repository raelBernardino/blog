import React from 'react'
import { Link } from 'gatsby'

export default () => {
  return (
    <div className="landing">
      <div className="landing-left">
        <h4 className="landing-left__title">The Days of Your Youth</h4>
        <span className="landing-left__author">By Rael Bernardino</span>
        <span className="landing-left__description">A platform created to log moments and experiences in my life. I'll be writing things down relevant to God, family, friends, coding, rock climbing, and any other possibly exciting thing that happens to me. Stay tuned.</span>
        <span className="landing-left__verse-title">Ecclesiastes 12:1</span>
        <span className="landing-left__verse">Remember also your Creator in the days of your youth, before the evil days come and the years draw near of which you will say, “I have no pleasure in them”;</span>
        <Link to="/blogs">
          <button className="landing-left__button">BLOGS</button>
        </Link>
      </div>
      <div className="landing-right" />
    </div>
  )
}