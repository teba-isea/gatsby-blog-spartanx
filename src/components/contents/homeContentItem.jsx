import React from 'react'
import Image from 'gatsby-image'

import {Col,Row} from '../../styleds/grid'
import {PostItem, Button} from '../../styleds/contents/homeContentItem'

const HomeContentItem = ({post}) => {

  const {title,content,header,slug} = post 

  return (
    <Col margin={1} size={3}>
      <PostItem>
	<h3>{title}</h3>
	<Image fluid={header.fluid}/>
	<Row>
	  <p>{content.slice(0,165)}...</p>
	  <Button to={`/${slug}`}>Visit!</Button>
	</Row>
      </PostItem>
    </Col>
  )
}

export default HomeContentItem
