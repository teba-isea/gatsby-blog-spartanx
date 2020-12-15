import React from 'react'

import Navbar from './navbar'
import {Header, Container, Title} from '../../styleds/header'

const header = () => {
  return (
    <Header>
      <Container>
	<Title to={'/'}>Spartan<span>X</span></Title>		
	<Navbar/>
      </Container>
    </Header>  

  )
}

export default header
