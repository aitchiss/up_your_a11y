import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import CategoryLayout from '../../components/CategoryLayout/CategoryLayout'

const filterToFundamentals = nodeData =>
  nodeData
    .filter(({ node }) => node.frontmatter.category === 'fundamentals')
    .map(x => x.node)

const Fundamentals = () => {
  return (
    <StaticQuery
      query={pageQuery}
      render={data => {
        const nodeData = data.allMdx.edges
        const categoryPages = filterToFundamentals(nodeData)

        return <CategoryLayout title="fundamentals" articles={categoryPages} />
      }}
    />
  )
}

export default Fundamentals

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
          }
        }
      }
    }
  }
`
