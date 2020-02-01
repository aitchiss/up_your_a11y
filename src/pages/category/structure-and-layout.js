import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import CategoryLayout from '../../components/CategoryLayout/CategoryLayout'

const filterToStructure = nodeData =>
  nodeData
    .filter(({ node }) => node.frontmatter.category === 'structure')
    .map(x => x.node)

const StructureCategory = () => {
  return (
    <StaticQuery
      query={pageQuery}
      render={data => {
        const nodeData = data.allMdx.edges
        const categoryPages = filterToStructure(nodeData)

        return (
          <CategoryLayout title="structure / layout" articles={categoryPages} />
        )
      }}
    />
  )
}

export default StructureCategory

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
