import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './style.css'
import TopicCard from '../components/TopicCard/TopicCard'

class TopicsIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <ul className="plainList">
          {posts.map(({ node }) => {
            const displayTitle =
              node.frontmatter.displayTitle || node.fields.slug
            console.log(node.frontmatter)
            const accent = node.frontmatter.accentColor || ''
            const description = node.frontmatter.description || ''
            return (
              <li>
                <TopicCard
                  key={node.fields.slug}
                  headingLevel="2"
                  accentColor={accent}
                  showButton
                  linkUrl={node.fields.slug}
                  linkAriaLabel={`Link to ${displayTitle}`}
                  topic={{
                    title: displayTitle,
                    description: description,
                  }}
                />
              </li>
            )
          })}
        </ul>
      </Layout>
    )
  }
}

export default TopicsIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            displayTitle
            accentColor
            keyTakeaways
            description
          }
        }
      }
    }
  }
`
