import React from 'react'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import layoutStyle from './pageLayoutsReorganised.module.css'

class PageLayoutsEnhanced extends React.Component {
  render() {
    return (
      <div className={layoutStyle.wrapper}>
        <SEO title="Page Layouts Reorganised" />
        <header className={layoutStyle.header}>
          <nav className={layoutStyle.nav}>
            <Link to="/page-layout" className={layoutStyle.headerLink}>
              Back to the article
            </Link>
          </nav>
        </header>
        <div className={layoutStyle.contentContainer}>
          <main>
            <section
              title="demo page instructions"
              className={layoutStyle.articleContent}
            >
              <h1>Page Layouts Demo Page</h1>
              <p>
                Hi there! This is a short demo page to highlight some
                accessibility considerations with structure.
              </p>
              <p>
                Turn your screen reader on and have a read through the page.
              </p>
              <h2>What did you find?</h2>
              <p>What issues could you find with the page?</p>
              <p>
                Is it easy to skip through content? Are the elements read in the
                order you expected?
              </p>
            </section>
          </main>
          <aside className={layoutStyle.sidePanel}>
            <h2>Further information</h2>
            <ul className={layoutStyle.sidePanelList}>
              <li>
                <div className={layoutStyle.infoLink}>
                  <a href="">Info Link 1</a>
                </div>
              </li>
              <li>
                <div className={layoutStyle.infoLink}>
                  <a href="">Info Link 2</a>
                </div>
              </li>
              <li>
                <div className={layoutStyle.infoLink}>
                  <a href="">Info Link 3</a>
                </div>
              </li>
            </ul>
          </aside>
        </div>
        <footer className={layoutStyle.footer}>
          <a href="">Example footer link</a>
        </footer>
      </div>
    )
  }
}

export default PageLayoutsEnhanced
