import React from 'react'
import { Link, graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ButtonBox from '../components/ButtonBox/ButtonBox'
import Gist from 'super-react-gist'
import ReadingList from '../components/ReadingList/ReadingList'
import ErrorForm from '../components/ErrorForm/ErrorForm'
import ErrorFormWithList from '../components/ErrorForm/ErrorFormWithList'
import ErrorFormInlineError from '../components/ErrorForm/ErrorFormInlineError'
import ExampleFormContainer from '../components/ExampleFormContainer/ExampleFormContainer'
import DecorativeList from '../components/DecorativeList/DecorativeList'
import DecorativeImageExample from '../components/DecorativeImageExample/DecorativeImageExample'
import '../pages/style.css'
import postStyle from './postStyle.module.css'
import SectionContainer from '../components/SectionContainer/SectionContainer'
import BreadcrumbBar from '../components/BreadcrumbBar/BreadcrumbBar'

const categoryUrlMapping = {
  fundamentals: '/category/fundamentals',
  react: '/category/react',
  forms: '/category/forms-and-inputs',
  structure: '/category/structure-and-layout',
}

const categoryTitleMapping = {
  fundamentals: 'fundamentals',
  react: 'react',
  forms: 'forms + inputs',
  structure: 'structure / layout',
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const { category, artUrl } = post.frontmatter
    const siteTitle = this.props.data.site.siteMetadata.title
    const postKeywords = post.frontmatter.keywords
    const baseKeywords = [
      'accessibility',
      'a11y',
      'react',
      'html',
      'web development',
      'screen reader',
      'assistive technology',
    ]

    const keyTakeaways = post.frontmatter.keyTakeaways || []
    const readingList = post.frontmatter.readingList || []

    const previewListItems = keyTakeaways.map((x, index) => {
      const key = `key-takeaway-${index}`
      return <li key={key}>{x}</li>
    })

    const furtherReadingListItems = readingList.map((x, index) => {
      const key = `reading-list-${index}`
      return (
        <li key={key}>
          <a href={x.url}>{x.description}</a>
        </li>
      )
    })

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.displayTitle}
          description={post.frontmatter.description}
          keywords={[...postKeywords, ...baseKeywords]}
        />
        <BreadcrumbBar
          url={categoryUrlMapping[post.frontmatter.category]}
          name={categoryTitleMapping[post.frontmatter.category]}
        />
        <SectionContainer className={postStyle.takewayContainer}>
          {category !== 'demo' && (
            <div className={postStyle.titleWrapper}>
              <div
                className={postStyle.titleColorBlock}
                style={{
                  backgroundImage: `url(${artUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className={postStyle.titleDetailWrapper}>
                <h1>{post.frontmatter.displayTitle}</h1>
                <p className={postStyle.keyTakeawaysBlurb}>
                  For developers who want to:
                </p>
                <ul className={postStyle.takeawaysList}>{previewListItems}</ul>
              </div>
            </div>
          )}
        </SectionContainer>
        <SectionContainer className={postStyle.mainPost}>
          <MDXRenderer
            scope={{
              ButtonBox,
              Gist,
              ReadingList,
              Link,
              ExampleFormContainer,
              ErrorForm,
              ErrorFormWithList,
              ErrorFormInlineError,
              DecorativeList,
              DecorativeImageExample,
            }}
          >
            {post.code.body}
          </MDXRenderer>
        </SectionContainer>
        {category !== 'demo' && (
          <SectionContainer className={postStyle.furtherReadingSection}>
            <h2>further reading</h2>
            <ul>{furtherReadingListItems}</ul>
          </SectionContainer>
        )}
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
        image
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        displayTitle
        description
        category
        accentColor
        keyTakeaways
        artUrl
        readingList {
          url
          description
        }
        keywords
      }
      code {
        body
      }
    }
  }
`
