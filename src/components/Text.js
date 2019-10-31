import styled from 'styled-components'

export const ArticleHeader = styled.h1`
  font-family: "Playfair Display";
  font-size: 65px;
  font-weight: 900;
  margin-bottom: 0;
  @media only screen and (max-width: 800px) {
    margin-top: 0;
  }
  @media only screen and (max-width: 350px) {
    font-size: 30px;
  }
`

export const HeaderTag = styled.span`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 300;
  @media only screen and (max-width: 1050px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 15px;
  }
`

export const ArticleText = styled(HeaderTag)`
  font-family: "Playfair Display";
  font-size: 25px;
  width: 80%;
`
export const VerseHeader = styled.span`
  font-family: "Playfair Display";
  font-weight: 300;
  font-style: italic;
  font-size: 20px;
  padding-right: 30px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(50%, rgba(255, 255, 255, 0)),
    color-stop(50%, #ffe29a)
  );
  background: -o-linear-gradient(top, rgba(255, 255, 255, 0) 50%, #ffe29a 50%);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #ffe29a 50%);
  margin: 0;
  @media only screen and (max-width: 1050px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 12px;
  }
`

export const VerseText = styled(VerseHeader)`
  font-style: normal;
  background: none;
`