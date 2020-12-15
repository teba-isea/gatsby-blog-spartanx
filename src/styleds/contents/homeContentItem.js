import styled from '@emotion/styled'
import {Link} from 'gatsby'

export const PostItem = styled.div`
  padding:1rem;
  box-shadow: 0rem 0.5rem 1rem rgb(0, 0, 0, 0.25);
  transition: all .3s ease;
  
  &:hover{
    transform:scale(1.03);  
  }

  h3{
    text-align:center;
  }

  p{
    padding:0rem 2rem;
  }
`

export const Button = styled(Link)`
  font-family:sans-serif;
  margin: 1rem 1.5rem;
  padding: 1rem;
  width:60%;
  background-color: rgba(44,62,80,.85);
  color:#FFF;
  display:block;
  text-decoration:none;
  font-weight:700;
  text-align:center;
  transition: all .3s ease;
  
  &:hover{
    transform:scale(1.02);  
  }

`
