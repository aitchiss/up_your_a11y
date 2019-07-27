import React from 'react'
import menuHeaderStyle from './menuheader.module.css'
import { graphql, StaticQuery, Link } from 'gatsby'

function MenuHeader(props) {
  return (
    <StaticQuery
      query={headerQuery}
      render={data => {
        const { logoLarge, logoSmall } = data
        const { expanded } = props
        const logoStyle = expanded
          ? menuHeaderStyle.logoLarge
          : menuHeaderStyle.logoSmall
        const logoSrc = expanded
          ? logoLarge.edges[0].node.publicURL
          : logoSmall.edges[0].node.publicURL
        return (
          <header>
            <div className={menuHeaderStyle.header}>
              {!expanded ? (
                <Link to="/" aria-label="Back to home page">
                  <img
                    src={logoSrc}
                    alt="Up your accessibility logo"
                    className={logoStyle}
                  />
                </Link>
              ) : (
                <img
                  src={logoSrc}
                  alt="Up your accessibility logo"
                  className={logoStyle}
                />
              )}
            </div>
          </header>
        )
      }}
    />
  )
}

const headerQuery = graphql`
  query HeaderQuery {
    logoLarge: allFile(filter: { name: { eq: "UYALogo_lg" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    logoSmall: allFile(filter: { name: { eq: "UYALogo_sm" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

export default MenuHeader
