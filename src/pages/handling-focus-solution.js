import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import solutionStyle from './handling-focus-solution.module.css'

class HandlingFocusSolution extends React.Component {
  headingRef = React.createRef()

  componentDidMount() {
    this.headingRef.current.focus()
  }

  render() {
    return (
      <Layout location={{ pathname: '/handling-focus-solution' }}>
        <h1
          ref={this.headingRef}
          className={solutionStyle.focusableHeader}
          tabIndex="-1"
        >
          Hi again!
        </h1>
        <p>Do you notice anything different about this page?</p>
        <p>What was announced as soon as you landed on the page?</p>
        <p>
          Did the route change leave you with a better understanding of the new
          content?
        </p>
        <p>
          And does tabbing to the link back to the article feel more logical and
          follow normal convention?
        </p>
        <Link to="/handling-focus">Go back to the article</Link>
      </Layout>
    )
  }
}

export default HandlingFocusSolution
