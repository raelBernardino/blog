import styled from 'styled-components'

export const Button = styled.button`
  padding: 20px 50px 20px 50px;
  font-family: "Roboto";
  font-weight: 300;
  font-size: 15px;
  border: solid white 1px;
  outline: none;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  color: white;
  background-color: transparent;
  max-width: 250px;
  &:hover {
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    cursor: pointer;
    background-color: white;
    color: black;
  }
  @media only screen and (max-width: 800px) {
      font-size: 12px;
      max-width: 100%;
  }
  @media only screen and (max-width: 350px) {
    padding: 10px 30px 10px 30px;
  }
`

export const ButtonLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 20px 50px 20px 50px;
  font-family: "Roboto";
  font-weight: 900;
  font-size: 20px;
  border: solid black 1px;
  outline: none;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  background-color: white;
  max-width: 250px;
  &:hover {
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    cursor: pointer;
    background-color: black;
    color: white;
  }
  @media only screen and (max-width: 450px) {
      font-size: 15px;
      max-width: 50%;
  }
  @media only screen and (max-width: 350px) {
    padding: 10px 30px 10px 30px;
  }
`