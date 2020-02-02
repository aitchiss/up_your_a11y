import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import CategoryLayout from '../../components/CategoryLayout/CategoryLayout'

const filterToForms = nodeData =>
  nodeData
    .filter(({ node }) => node.frontmatter.category === 'forms')
    .map(x => x.node)

const FormsCategory = () => {
  return (
    <StaticQuery
      query={pageQuery}
      render={data => {
        const nodeData = data.allMdx.edges
        const categoryPages = filterToForms(nodeData)

        return (
          <CategoryLayout title="forms + inputs" articles={categoryPages} />
        )
      }}
    />
  )
}

export default FormsCategory

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
            sortOrder
            artUrl
          }
        }
      }
    }
  }
`
