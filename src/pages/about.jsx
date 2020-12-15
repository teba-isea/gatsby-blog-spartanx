import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/layout' 
import {Container, Row, Col} from '../styleds/grid'
import {Title, ContentWrapper} from '../styleds/pages/about'
 
const About = () => {

  const query = useStaticQuery(graphql`
    query {
      allDatoCmsAboutMe {
	edges {
	  node {
	    title
	    header {
	      fluid {
		...GatsbyDatoCmsFluid
	      }
	    }
	    biograhy
	  }
	}}}`)

  const {title, header, biograhy} = query.allDatoCmsAboutMe.edges[0].node

  return (
    <Layout>
      <Container>
	<Row>
	  <Col size={8}>
	    <Container>  
	      <Title>{title}</Title>
	      <Row>
		<Col size={6}>
		  <Image fluid={header.fluid}/>
		</Col>

		<Col size={5}>
		  <p>{biograhy}</p>
		</Col>
	      </Row>
	    </Container>
	  </Col>
	</Row>
      </Container>
    </Layout> 
  )
}

export default About
