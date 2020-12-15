import React, { Fragment } from 'react'
import {Global, css} from '@emotion/react'
import Helmet from 'react-helmet'

import useSeo from '../../hooks/useSeo'
import Footer from './footer'
import Header from './header'
import {LayoutWrapper} from '../../styleds/layout'
import './normalize.css'

const Layout = props => {

  const {
    siteName, 
    titleSuffix, 
    fallbackSeo: {title, description}} 
  = useSeo() 

  return (
    <Fragment>

      <Helmet>
	<title>{title}</title>
	<meta name="description" content={description}/>
      </Helmet>

      <Global styles={css`
	html {
	  font-size:62.5%;
	}
	body {
	  font-size:16px;
	  font-size:1.6rem;
	  line-height:1.5;
	  min-width:100% !important;
	  position:relative;
	  padding-bottom:8rem;
	}
	h1,h2,h3,h4,h5 {
	  font-family:sans-serif;
	}
	p {
	  font-family:sans-serif;
	}
	ul {
	  list-style:none;
	  margin:0;
	  padding:0;
	}
      `}/>
      <LayoutWrapper>
	<Header /> 
	  {props.children}
      </LayoutWrapper>
	<Footer />
    </Fragment>
  )
}

export default Layout
