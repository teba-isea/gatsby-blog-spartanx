import styled from '@emotion/styled'
import {Link} from 'gatsby'
export const Header= styled.header`
  background-color:#b30e1e;
  padding:1rem;
`
export const Container = styled.div`
  max-width:1200px;
  margin: 0 auto;
  @media(min-width:768px) {
    display:flex;
    flex-wrap:nowrap;
    align-items:center;
    justify-content:space-between;
  }
`

export const Title = styled(Link)`

    display:block;
    color:#fff;
    font-size:sans-serif;
    font-size:4rem;
    text-align:center;
    text-decoration:none;
    span {
      transform:scale(1.03);
      color:yellow;
    }
`
