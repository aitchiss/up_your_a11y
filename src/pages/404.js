import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import SectionContainer from '../components/SectionContainer/SectionContainer'

export default function NotFoundPage({ location }) {
  return (
    <Layout location={location}>
      <SEO title="404: Not Found" />
      <SectionContainer>
        <h1>something went wrong</h1>
        <p>Sorry, that page seems to have disappeared</p>
        <Link to="/">Go back to the Home Page</Link>
      </SectionContainer>
    </Layout>
  )
}
