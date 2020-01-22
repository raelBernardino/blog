import React from 'react'
import { Landing } from '../components/'
import '../styles/styles.scss'
import '../styles/blogtemplate.scss'
import '../styles/footer.scss'
import '../styles/landing.scss'
import '../styles/nav.scss'

export default () => {
  return (
    <div className="wrapper-outer" style={{ display: "flex", flexDirection: "column" }}>
        <Landing />
    </div>
  )
}