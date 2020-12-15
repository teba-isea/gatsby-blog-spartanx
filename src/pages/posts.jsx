import React from 'react'

import useAllPosts from '../hooks/useAllPosts'
import Layout from '../components/layout'
import {Container,Row,Col} from '../styleds/grid'
import {Title} from '../styleds/contents/homeContent'
import PostItem from '../components/contents/homeContentItem'

const Posts = () => {

  const posts = useAllPosts()

  return (
    <Layout>
      <Container>
	<Title>We Posts</Title> 
	<Row margin={3}>
	  {posts.map(post => (
	    <PostItem key={post.id} post={post}/>
	  ))}
	</Row>
      </Container> 
    </Layout>
  )
}

export default Posts
