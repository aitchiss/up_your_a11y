import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import About from '../components/About/About'
import './style.css'

class AboutPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="About" />
        <About />
      </Layout>
    )
  }
}

export default AboutPage
