import React from 'react'

import {Navbar,NavLink} from '../../styleds/navbar'

const navbar = () => {
  return (
    <Navbar>
      <NavLink 
	to={'/'} 
	activeClassName="actual-page"
      >Home</NavLink>

      <NavLink 
	to={'/about'} 
	activeClassName="actual-page"
      >About me</NavLink>
 
    </Navbar>
  )
}

export default navbar
