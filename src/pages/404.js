import React from "react"
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <div className="coming-soon">
    <span>NOT FOUND</span>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link
      to="/"
    >{"< Return to home"}</Link>
  </div>
)
export default NotFoundPage
