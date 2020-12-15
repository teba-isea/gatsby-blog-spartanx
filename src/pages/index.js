import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import BackgroundImage from '../components/backgroundImage'
import HomeContent from '../components/contents/homeContent'

const IndexPage = () => {
  return (
    <Layout>
      <BackgroundImage/>
      <HomeContent/>
    </Layout>
  )
}

export default IndexPage
