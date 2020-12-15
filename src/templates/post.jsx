import React from 'react'
import {graphql} from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/layout'
import {Container, Row, Col} from '../styleds/grid' 
import {Title, CreationDate, ContentParagraph} from '../styleds/templates/post'

export const query = graphql`
  query ($slug: String!) {
    allDatoCmsPost(filter: {slug: {eq: $slug}}) {
      nodes {
	title
	content
	header {
	  fluid(maxWidth: 1200) {
	    ...GatsbyDatoCmsFluid
	  }
	}
	slug
	meta {
	  createdAt
	}
      }
    }
  }`


const Post = ({data}) => {

  const {title, content, header, meta:{createdAt}} = data.allDatoCmsPost.nodes[0]
  
  return (
    <Layout>
      <Container>
	<Row>
	  <Col size={8}>
	    <Row>
	      <Col size={7}>
		<Title>{title}</Title>
	      </Col>
	      <Col size={3}>
		<CreationDate>Created at :{createdAt.slice(0,10)}</CreationDate>
	      </Col>
	    </Row>
	    <Row>
	      <Col size={10}>
		<Image fluid={header.fluid}/>
		<ContentParagraph>
		  {content}
		</ContentParagraph>
	      </Col> 
	    </Row>
	  </Col>
	</Row>
      </Container>
    </Layout> 
  )
}

export default Post
