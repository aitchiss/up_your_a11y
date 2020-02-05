import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import About from '../components/About/About'
import SectionContainer from '../components/SectionContainer/SectionContainer'
import SEO from '../components/seo'
import './style.css'
import indexStyle from './index.module.css'
import HomePageAbout from '../components/HomePageAbout/HomePageAbout'
import Contact from '../components/Contact/Contact'
import Contribute from '../components/Contribute/Contribute'
import Copyright from '../components/Copyright/Copyright'

const categories = [
  {
    id: 'fundamentals',
    path: '/category/fundamentals',
    title: 'fundamentals',
    description:
      'understand the who, what and why of accessibility, and set up your local environment and tooling',
    titleColorName: '--font-white',
  },
  {
    id: 'react',
    path: '/category/react',
    title: 'a11y for React',
    description:
      'overcoming common accessibility challenges in React applications',
    titleColorName: '--font-black',
  },
  {
    id: 'structure',
    path: '/category/structure-and-layout',
    title: 'structure / layout',
    description:
      'essentials for creating accessible page structures and using semantic HTML',
    titleColorName: '--font-black',
  },
  {
    id: 'forms',
    path: '/category/forms-and-inputs',
    title: 'forms + inputs',
    description: 'create accessible forms, handling data validation and errors',
    titleColorName: '--font-white',
  },
]

class TopicsIndex extends React.Component {
  render() {
    const { data } = this.props
    const { react, fundamentals, structure, forms } = data

    const backdropUrls = {
      react: react.edges[0].node.publicURL,
      fundamentals: fundamentals.edges[0].node.publicURL,
      structure: structure.edges[0].node.publicURL,
      forms: forms.edges[0].node.publicURL,
    }
    const siteTitle = data.site.siteMetadata.title
    const siteImg = data.site.siteMetadata.image

    const categoryListItems = categories.map(category => {
      return (
        <li key={`category-${category.id}`}>
          <div
            className={indexStyle.categoryTile}
            style={{
              backgroundImage: `url(${backdropUrls[category.id]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <Link className={indexStyle.categoryLink} to={category.path}>
              <h2
                style={{ color: `var(${category.titleColorName})` }}
                className={indexStyle.categoryHeader}
              >
                {category.title}
              </h2>
            </Link>
          </div>
          <p>{category.description}</p>
        </li>
      )
    })

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
        <SectionContainer>
          <HomePageAbout />
          <ul className={indexStyle.plainList}>{categoryListItems}</ul>
        </SectionContainer>
        <About />
        <Contact />
        <Contribute />
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
    react: allFile(filter: { name: { eq: "react-backdrop-sm" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    fundamentals: allFile(
      filter: { name: { eq: "fundamentals-backdrop-sm" } }
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
    structure: allFile(filter: { name: { eq: "structure-backdrop-sm" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    forms: allFile(filter: { name: { eq: "forms-backdrop-sm" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`
