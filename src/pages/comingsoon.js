import React from 'react'
import { Link } from 'gatsby'

export default () => {
  return (
    <div className="coming-soon">
      <span style={{fontSize: "20px", color: "white"}}>Coming Soon</span>
      <Link
        to="/"
        style={{textDecoration: "none", color: "#ffe29a", fontSize: "30px"}}
      >{"< Return to home"}</Link>
    </div>
  )
}