import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './style.css'
import indexStyle from './index.module.css'
import HomePageAbout from '../components/HomePageAbout/HomePageAbout'

const categories = [
  {
    id: 'fundamentals',
    title: 'fundamentals',
    description:
      'understand the who, what and why of accessibility, and set up your local environment and tooling',
    titleColor: '#2557C2',
  },
  {
    id: 'react',
    title: 'a11y for React',
    description:
      'overcoming common accessibility challenges in React applications',
    titleColor: '#FDF46C',
  },
  {
    id: 'structure',
    title: 'structure / layout',
    description:
      'essentials for creating accessible page structures and using semantic HTML',
    titleColor: '#43FEB7',
  },
  {
    id: 'forms',
    title: 'forms + inputs',
    description: 'create accessible forms, handling data validation and errors',
    titleColor: '#407059',
  },
]

class TopicsIndex extends React.Component {
  render() {
    const categoryListItems = categories.map(category => {
      return (
        <li>
          <div className={indexStyle.categoryTile}>
            <h2
              style={{ color: category.titleColor }}
              className={indexStyle.categoryHeader}
            >
              {category.title}
            </h2>
          </div>
          <p>{category.description}</p>
        </li>
      )
    })

    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteImg = data.site.siteMetadata.image

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          image={siteImg}
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
        <ul className={indexStyle.plainList}>{categoryListItems}</ul>
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
        image
      }
    }
  }
`
