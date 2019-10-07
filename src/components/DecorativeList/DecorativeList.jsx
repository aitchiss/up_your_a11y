import React from 'react'
import listStyle from './decorativeList.module.css'
import { graphql, StaticQuery } from 'gatsby'

class DecorativeList extends React.Component {
  render() {
    const { bulletsContent } = this.props

    return (
      <StaticQuery
        query={decorativeListQuery}
        render={data => {
          const { bullet } = data
          const bullets = bulletsContent.map((x, index) => {
            const key = `decorative-bullet-${index}`
            return (
              <li className={listStyle.listItem} key={key}>
                <img
                  src={bullet.edges[0].node.publicURL}
                  className={listStyle.bullet}
                />
                <span className={listStyle.bulletContent}>{x}</span>
              </li>
            )
          })
          return <ul className={listStyle.decorativeList}>{bullets}</ul>
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
