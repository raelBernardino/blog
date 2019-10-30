import React from 'react'
import Nav from './Nav'
import Button from './Button'

export default () => {
  return (
    <div className="wrapper-left">
      <div className="home-container">
        <div className="home-header-container">
          <h1 className="home-header">The Days of Your Youth</h1>
          <span className="home-tag">Rael Bernardino</span>
        </div>
        <div className="home-description__container">
          <span className="home-description">A platform created to log moments and experiences in my life. I'll be writing things down relevant to God, family, friends, coding, rock climbing, and any other possibly exciting thing that happens to me. Stay tuned.</span>
        </div>
        <div className="home-verse__container">
          <div className="home-verse__content">
            <span className="home-verse__header">Ecclesiastes 12:1</span>
            <span className="home-verse">"Remember also your Creator in the days of your youth, before the evil days come and the years draw near of which you will say, “I have no pleasure in them”"</span>
          </div>
        </div>
        <Button />
      </div>
    </div>
  )
}