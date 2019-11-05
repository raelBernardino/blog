import React from 'react'
import { VerticalContainer, HorizontalContainer } from './Container'
import { ArticleHeader, HeaderTag, VerseText } from './Text'
import { Button } from './Button'
import styled from 'styled-components'

const RecentBlogVerticalContainer = styled(VerticalContainer)`
  width: 90%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`

const RecentBlogHeader = styled(ArticleHeader)`
  font-size: 150px;
  background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        color-stop(50%, rgba(255, 255, 255, 0)),
        color-stop(50%, #ffe29a)
      );
  background: -o-linear-gradient(top, rgba(255, 255, 255, 0) 50%, #ffe29a 50%);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #ffe29a 50%);
  padding-right: 50px;
  box-sizing: border-box;
  margin: 0;
  @media only screen and (max-width: 1250px) {
    font-size: 120px;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 100px;
  };
  @media only screen and (max-width: 850px) {
    font-size: 75px;
  }
  @media only screen and (max-width: 650px) {
    font-size: 50px;
  };
  @media only screen and (max-width: 650px) {
    font-size: 35px;
  }
  `

const BlogHeaderTag = styled(HeaderTag)`
  font-size: 50px;
  @media only screen and (max-width: 1250px) {
    font-size: 20px;
  };
`

const RecentBlogVerticalText = styled(VerticalContainer)`
  justify-content: flex-start;
  width: 50%;
  height: 100%;
  margin-left: 5%;
  @media only screen and (max-width: 850px) {
    width: 100%;
    margin: 0;
    justify-content: center;
  }
`

const RecentBlogVerticalHeader = styled(VerticalContainer)`
  width: 100%;
  height: 33%;
  margin-bottom: 5%;
  justify-content: flex-end;
  @media only screen and (max-width: 1000px) {
    height: 0;
  };
  `

const RecentBlogHorizontalContainer = styled(HorizontalContainer)`
  height: 65%;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
    font-size: 100px;
  };
  `

const VerseItalic = styled(VerseText)`
  font-style: italic;
  margin-bottom: 10%;
  @media only screen and (max-width: 850px) {
    font-size: 15px;
  }
`

export default () => {
  return (
    <RecentBlogVerticalContainer>
      <RecentBlogVerticalHeader>
        <RecentBlogHeader>The Beginning</RecentBlogHeader>
        <BlogHeaderTag>November 01, 2019</BlogHeaderTag>
      </RecentBlogVerticalHeader>
      <RecentBlogHorizontalContainer>
        <div className="recent-blog__image" />
        <RecentBlogVerticalText>
          <VerseItalic>
            Listicle lo-fi ennui, artisan polaroid pabst chartreuse tousled food truck viral. IPhone chambray tbh yuccie iceland, tousled subway tile franzen hella marfa poke post-ironic.
          </VerseItalic>
          <Button>Read</Button>
        </RecentBlogVerticalText>
      </RecentBlogHorizontalContainer>
    </RecentBlogVerticalContainer>
  )
}