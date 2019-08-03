import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ContactForm from '../components/ContactForm/ContactForm'
import './style.css'
import contactStyle from './contact.module.css'

class Contact extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Contact" />
        <div className={contactStyle.introContainer}>
          <h1>Get in touch</h1>
          <p>
            Please don't hesitate to get in touch with your comments on existing
            content, suggestions for future topics, or whatever you want to
            share about all things a11y. This resource is truly a work in
            progress, and all input is gratefully received.
          </p>
          <p>
            Feel free to find me on Twitter at{' '}
            <a href="https://twitter.com/s_aitchison" target="_blank">
              @s_aitchison
            </a>{' '}
            or alternatively by filling out the contact form below.
          </p>
          <p>I look forward to hearing from you!</p>
        </div>
        <ContactForm />
      </Layout>
    )
  }
}

export default Contact
