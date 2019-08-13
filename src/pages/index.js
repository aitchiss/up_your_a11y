import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './style.css'
import TopicCard from '../components/TopicCard/TopicCard'
import HomePageAbout from '../components/HomePageAbout/HomePageAbout'

const CategoryListHeaders = {
  fundamentals: 'Getting the Fundamentals Right',
  reactPitfalls: 'Common React Pitfalls',
  lists: 'Structures and Layout',
  forms: 'Forms and User Input',
}

class TopicsIndex extends React.Component {
  static getListSections(posts) {
    const categories = Object.keys(CategoryListHeaders)
    const items = categories.map(category => {
      const matchingPosts = posts.filter(({ node }) => {
        const safeCategory = node.frontmatter.category || ''
        return safeCategory === category
      })

      const listEntries = matchingPosts.map(({ node }) => {
        const displayTitle = node.frontmatter.displayTitle || node.fields.slug
        const accent = node.frontmatter.accentColor || ''
        const description = node.frontmatter.description || ''
        return (
          <li key={`topic-list-item-${node.fields.slug}`}>
            <TopicCard
              key={node.fields.slug}
              headingLevel="3"
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
      })
      return (
        <React.Fragment key={`category-section-${category}`}>
          <h2 className="topicHeader">{CategoryListHeaders[category]}</h2>
          <ul className="plainList">{listEntries}</ul>
        </React.Fragment>
      )
    })
    return items
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[
            `accessibility`,
            `react`,
            `a11y`,
            `web`,
            `tutorial`,
            `blog`,
          ]}
        />
        <HomePageAbout />
        {TopicsIndex.getListSections(posts)}
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
