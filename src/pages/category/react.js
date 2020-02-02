import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import CategoryLayout from '../../components/CategoryLayout/CategoryLayout'

const filterToReact = nodeData =>
  nodeData
    .filter(({ node }) => node.frontmatter.category === 'react')
    .map(x => x.node)

const ReactCategory = () => {
  return (
    <StaticQuery
      query={pageQuery}
      render={data => {
        const nodeData = data.allMdx.edges
        const categoryPages = filterToReact(nodeData)
        const { banner } = data
        const bannerUrl = banner.edges[0].node.publicURL

        return (
          <CategoryLayout
            title="a11y for React"
            articles={categoryPages}
            bannerUrl={bannerUrl}
            titleColor="var(--font-yellow)"
          />
        )
      }}
    />
  )
}

export default ReactCategory

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: ASC, fields: [frontmatter___sortOrder] }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            displayTitle
            category
            accentColor
            keyTakeaways
            description
            artUrl
            sortOrder
          }
        }
      }
    }
    banner: allFile(filter: { name: { eq: "react-banner" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`
