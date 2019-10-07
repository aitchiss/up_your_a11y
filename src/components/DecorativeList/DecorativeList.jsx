import React from 'react'
import listStyle from './decorativeList.module.css'
import { graphql, StaticQuery } from 'gatsby'

class DecorativeList extends React.Component {
  render() {
    return (
      <StaticQuery
        query={decorativeListQuery}
        render={data => {
          const { bullet } = data
          return (
            <ul>
              <li>
                <img src={bullet.edges[0].node.publicURL} />
              </li>
            </ul>
          )
        }}
      />
    )
  }
}

const decorativeListQuery = graphql`
  query DecorativeListQuery {
    bullet: allFile(filter: { name: { eq: "decorative-bullet" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

export default DecorativeList
