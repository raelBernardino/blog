import React from 'react'
import { Link } from 'gatsby'

export default () => {
  return (
    <div className="coming-soon">
      <span style={{fontSize: "20px"}}>Coming Soon</span>
      <Link
        to="/"
      >{"< Return to home"}</Link>
    </div>
  )
}