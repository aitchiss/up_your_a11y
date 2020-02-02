import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import breadcrumbStyle from './breadcrumb.module.css'

export default function BreadcrumbBar({ url, name }) {
  return (
    <StaticQuery
      query={breadcrumbQuery}
      render={data => {
        const { chevron } = data
        return (
          <nav
            className={breadcrumbStyle.container}
            aria-label="breadcrumb navigation"
          >
            <div className={breadcrumbStyle.inner}>
              <Link
                tabIndex="-1"
                to={url}
                aria-hidden="true"
                className={breadcrumbStyle.chevronLink}
              >
                <img
                  src={chevron.edges[0].node.publicURL}
                  alt=""
                  className={breadcrumbStyle.chevron}
                />
              </Link>
              <Link to={url}>{name}</Link>
            </div>
          </nav>
        )
      }}
    />
  )
}

export const breadcrumbQuery = graphql`
  query {
    chevron: allFile(filter: { name: { eq: "chevron-left" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`
