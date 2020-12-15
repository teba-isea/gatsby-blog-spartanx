import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'

export const Background = styled(BackgroundImage)`
  height:85vh;
`

export const ImageText = styled.div`
  background-image: linear-gradient(to top, rgba(34,49,53,.75),rgba(34,49,63,.80));
  color:#FFF;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  h1{
    text-align:center;
    font-size: 4rem;
    margin: 0%;
    @media (min-width:992px){
      font-size:5.8rem;
    }
  }
  p{
    text-align:center;
    font-family:sans-serif;
    font-size:2rem;
    @media (min-width:992px){
      font-size:2.6rem;
    }
  }
`
