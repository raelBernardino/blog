import React from 'react'
// import { Nav } from '.'
import BlogCard from './BlogCard'
import styled from 'styled-components'

const BlogPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `

const BlogContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  overflow-x: auto;
`

export default ({ edges }) => {
  // const [blogCards, setBlogCards] = useState([
  //   {
  //     title: 'Congestion on 5th',
  //     date: '11.30.2019',
  //     image: park,
  //     content: 'Lorem ipsum dolor amet mixtape plaid tacos, cardigan austin meggings yr YOLO pop-up put a bird on it chartreuse. Helvetica kogi narwhal selfies af bushwick poutine 90\'s authentic mustache cray biodiesel fixie...'
  //   },
  //   {
  //     title: 'At the Pace I Pick',
  //     date: '12.01.2019',
  //     image: canes,
  //     content: 'IPhone distillery hella, try-hard squid art party VHS vexillologist chia mumblecore cray. Bicycle rights enamel pin brooklyn, whatever church-key chambray la croix shaman hexagon ethical keytar street art next level. Adaptogen waistcoat godard messenger bag art party austin enamel pin. Food truck tattooed meh vice...'
  //   }
  // ])

  return (
    <BlogPage>
      <BlogContainer>
        {
          edges.map((blog, i) => <BlogCard key={i} blog={blog} i={i} />)
        }
      </BlogContainer>
    </BlogPage>
  )
}