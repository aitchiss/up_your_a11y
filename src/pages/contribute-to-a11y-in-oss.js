import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './style.css'
import contributeStyle from './contribute-to-a11y-in-oss.module.css'
import axios from 'axios'

class A11yOSSContributionsPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    console.log('----LOADING')
    // Check only for issues last updated in the last 4 weeks
    // And sort by most recently updated
    const relevantDate = new Date()
    relevantDate.setDate(relevantDate.getDate() - 28)
    const day = relevantDate.getDay().toString()
    const month = relevantDate.getMonth().toString()
    const year = relevantDate.getFullYear()

    const dayFormatted = day.length === 1 ? `0${day}` : day
    const monthFormatted = month.length === 1 ? `0${month}` : month
    const dateQueryString = `${year}-${monthFormatted}-${dayFormatted}`

    axios
      .get(
        `https://api.github.com/search/issues?q=a11y+accessibility+type:issue+is:open+is:public+language:javascript+language:html+updated:>=${dateQueryString}+archived:false+no:assignee&per_page=100`
      )
      .then(response => {
        const { data } = response
        console.log(response)
        const safeItems = data.items || []
        this.setState({ loading: false })
      })
      .catch(e => {
        console.warn(e)
      })
  }

  render() {
    const { loading } = this.state

    return (
      <Layout location={this.props.location}>
        <SEO title="Contribute to A11y Issues in OSS" />
        <h1>100 Open A11y OSS Issues Looking for Help</h1>
        <p>
          Sometimes it's hard to know where to start in contributingn to Open
          Source Software, and often you might not have a particular repository
          in mind that you'd like to contribute to.
        </p>
        <p>
          If you're passionate about accessibility, you might like to consider
          taking on open issues that will help improve the accessibility of an
          OSS project.
        </p>
        <p>
          To help make this as easy as possible, we've listed below 100 current
          issues referencing accessibility that are waiting on an assignee.
          Follow the links below to find out more about how you could
          contribute.
        </p>
        <p>The list below includes open issues:</p>
        <ul>
          <li>From OSS projects</li>
          <li>Referencing 'a11y' or 'accessibility'</li>
          <li>Updated in the last 4 weeks</li>
          <li>No assignee or pull request yet</li>
          <li>Utilising JavaScript or HTML</li>
        </ul>
        <section className={contributeStyle.listSection}>
          <div
            style={{ display: loading ? 'block' : 'none' }}
            className={contributeStyle.loader}
            role="alert"
          />
          <p className={contributeStyle.spinnerCopy} aria-live="assertive">
            {loading
              ? 'Open O.S.S. issues are loading...'
              : 'Open O.S.S. issues have finished loading.'}
          </p>
        </section>
      </Layout>
    )
  }
}

export default A11yOSSContributionsPage
