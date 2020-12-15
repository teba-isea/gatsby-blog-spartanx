import React from 'react'

import useNewPosts from '../../hooks/useNewPosts'
import {Container,Row,Col} from '../../styleds/grid'
import {Title} from '../../styleds/contents/homeContent'
import PostItem from './homeContentItem'

const HomeContent = () => {

  const posts = useNewPosts()

  return (
    <Container>
      <Title>New Entries</Title> 
      <Row>
	{posts.map(post => (
	  <PostItem key={post.id} post={post}/>
	))}
      </Row>
    </Container> 
  )
}

export default HomeContent
