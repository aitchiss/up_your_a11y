import React from 'react'
import { Link } from 'gatsby'
import aboutStyle from './homepageabout.module.css'

class HomePageAbout extends React.Component {
  render() {
    return (
      <div className={aboutStyle.aboutWrapper}>
        <h1>web accessibility toolkit</h1>
        <p>
          tutorials &amp; resources for developers looking to build accessible web experiences
        </p>
       
      </div>
    )
  }
}

export default HomePageAbout
