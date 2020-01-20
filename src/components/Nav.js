import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 125px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: space-between;
  padding: 0 5% 0 5%;
  box-sizing: border-box;

`

// const NavLinksContainer = styled.div`
//   font-family: "Playfair Display", sans-serif;
//   display: flex;
//   justify-content: space-around;
//   font-weight: 900;
//   text-decoration: none;
//   color: white;
//   width: 25%;
// `

const NavLinksHeader = styled.h3`
  font-family: "Playfair Display", sans-serif;
  font-weight: 900;
  font-size: 30px;
  text-decoration: none;
  transition: 0.3s;
    &:hover {
      -webkit-transition: 0.3s;
      -o-transition: 0.3s;
      transition: 0.3s;
      color: grey;
    }
    @media only screen and (max-width: 650px) {
      font-size: 20px;
    }
`

export default function () {
  return (
    <Nav>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <NavLinksHeader>The Days of Your Youth</NavLinksHeader>
      </Link>
      {/* <NavLinksContainer>
        <Link
          className="nav-links"
          activeClassName="nav-links__active"
          to="/">Home</Link>
        <Link
          className="nav-links"
          activeClassName="nav-links__active"
          to="/blog">Blog</Link>
        <Link
          className="nav-links"
          activeClassName="nav-links__active"
          to="/comingsoon">About</Link>
      </NavLinksContainer> */}
    </Nav>
  )
}