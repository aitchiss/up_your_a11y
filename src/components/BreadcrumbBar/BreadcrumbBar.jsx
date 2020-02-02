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
          <div className={breadcrumbStyle.container}>
            <div className={breadcrumbStyle.inner}>
              <Link
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
          </div>
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
