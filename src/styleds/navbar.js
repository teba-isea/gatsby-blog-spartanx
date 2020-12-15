import styled from '@emotion/styled'
import {Link} from 'gatsby'

export const Navbar = styled.nav`
  display:flex; 
  justify-content: center;
  padding-bottom: 2rem;

  @media (min-width:768px;) {
    padding-bottom:0;
  }
`

export const NavLink = styled(Link)`
  color:#FFF;
  font-size:1.6rem;
  font-weight:700;
  font-family:sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin: 0rem 0.5rem;
  transition:all .2s ease;

  &.actual-page {
    border-bottom: 2px solid #FFF;
  }
`
