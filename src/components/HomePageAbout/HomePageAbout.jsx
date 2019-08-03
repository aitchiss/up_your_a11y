import React from 'react'
import { Link } from 'gatsby'
import aboutStyle from './homepageabout.module.css'

class HomePageAbout extends React.Component {
  render() {
    return (
      <div className={aboutStyle.aboutWrapper}>
        <h1>A web accessibility toolkit with a React focus</h1>
        <p>
          Welcome to Up Your A11y! This site aims to be a resource for front-end
          developers to find useful information on how to make your sites more
          accessible for a range of users. The topics covered have a
          React-specific focus, but the principles in each apply to all web
          development, so please don't be put off if you don't work with React
          specifically!
        </p>
        <p>
          Articles are organised into sections below, and please don't hesitate
          to <Link to="/contact">Contact Me</Link> with suggestions for current
          and future content.
        </p>
      </div>
    )
  }
}

export default HomePageAbout
