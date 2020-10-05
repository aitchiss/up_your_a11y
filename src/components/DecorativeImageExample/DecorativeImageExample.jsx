import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import decorativeStyle from './decorativeImage.module.css'

export default function DecorativeImageExample({ caption }) {
  return (<StaticQuery 
    query={decorativeImageQuery}
    render={data => {
      const { decorative } = data
      return <div className={decorativeStyle.wrapper}>
          <img src={decorative.edges[0].node.publicURL} alt="A slice of cherry pie" className={decorativeStyle.decorativeImage} />
          <p className={decorativeStyle.tagline}>{caption}</p>
        </div>
    }}
  />)
}

const decorativeImageQuery = graphql`
  query decorativeImageQuery {
    decorative: allFile(filter: { name: { eq: "cherry-pie" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`
