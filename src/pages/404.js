import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>Sorry, we couldn't find the page you're looking for.</p>
        <Link to="/">
          To view all available topics, go back to the Home Page
        </Link>
      </Layout>
    )
  }
}

export default NotFoundPage
