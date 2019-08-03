import React from 'react'
import { Link } from 'gatsby'
import layoutStyle from './pageLayoutsStarter.module.css'

class PageLayoutsStarter extends React.Component {
  render() {
    return (
      <div className={layoutStyle.wrapper}>
        <div className={layoutStyle.header}>
          <Link to="/page-layout" className={layoutStyle.headerLink}>
            Back to the article
          </Link>
        </div>
        <div className={layoutStyle.footer}>
          <a href="">Example footer link</a>
        </div>
        <div className={layoutStyle.contentContainer}>
          <div className={layoutStyle.sidePanel}>
            <h2>Further information</h2>
            <div className={layoutStyle.infoLink}>
              <a href="">Info Link 1</a>
            </div>
            <div className={layoutStyle.infoLink}>
              <a href="">Info Link 2</a>
            </div>
            <div className={layoutStyle.infoLink}>
              <a href="">Info Link 3</a>
            </div>
          </div>
          <div className={layoutStyle.articleContent}>
            <p className={layoutStyle.titleText}>Page Layouts Demo Page</p>

            <p>
              Hi there! This is a short demo page to highlight some
              accessibility considerations with structure.
            </p>
            <p>Turn your screen reader on and have a read through the page.</p>
            <h2>What did you find?</h2>
            <p>What issues could you find with the page?</p>
            <p>
              Is it easy to skip through content? Are the elements read in the
              order you expected?
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default PageLayoutsStarter
