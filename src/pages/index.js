import React from 'react'
import { Landing } from '../components/'
import '../styles/landing.scss'

export default () => {
  return (
    <div className="wrapper-outer" style={{ display: "flex", flexDirection: "column" }}>
        <Landing />
    </div>
  )
}