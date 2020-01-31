import React from 'react'
import menuHeaderStyle from './menuheader.module.css'
import { graphql, StaticQuery, Link } from 'gatsby'
import Navigation from './Navigation/Navigation'

export default function MenuHeader() {
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
                className={menuHeaderStyle.logoLink}
              >
                <img
                  src={logo.edges[0].node.publicURL}
                  alt="Home"
                  width="250"
                />
              </Link>
              <div className={menuHeaderStyle.navigation}>
                <Navigation />
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
    logo: allFile(filter: { name: { eq: "UYA11y-Logo_v2" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`
