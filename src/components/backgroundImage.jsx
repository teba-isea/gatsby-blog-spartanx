import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {Background, ImageText} from  '../styleds/backgroundImage.jsx'

const BackgroundImage = () => {
  
  const {image} = useStaticQuery(graphql`
    query{
      image: file(relativePath: {eq: "l-sit.webp"} ){
	sharp: childImageSharp {
	  fluid {
	    ...GatsbyImageSharpFluid_withWebp
	  }
	} 
      }
    }`) 

  return (
    <Background tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <ImageText>
	<h1>Elite Training For Elite Athlets</h1>
	<p>Learn about effective training and Sport 
	Scientist Innovation </p>
      </ImageText>	
    </Background>
  )
}

export default BackgroundImage
