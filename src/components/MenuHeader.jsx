import React from 'react'
import menuHeaderStyle from './menuheader.module.css'
import { graphql, StaticQuery, Link } from 'gatsby'
import Navigation from './Navigation/Navigation'

export default function MenuHeader({location}) {

  return (
    <StaticQuery
      query={headerQuery}
      render={data => {
        const { logo } = data
        return (
          <header>
            <div className={menuHeaderStyle.header}>
              <Link
                to="/"
                aria-label="Home"
                className={menuHeaderStyle.currentPageLink}
              >
                <img
                  src={logo.edges[0].node.publicURL}
                  alt="Home"
                  width="250"
                />
              </Link>
              <div className={menuHeaderStyle.navigation}>
                <Navigation location={location} />
              </div>
            </div>
          </header>
        )
      }}
    />
  )
}

const headerQuery = graphql`
  query HeaderQuery {
    logo: allFile(filter: { name: { eq: "uya-mp-logo2" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`
