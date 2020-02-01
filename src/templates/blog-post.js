import React from 'react'
import { Link, graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ButtonBox from '../components/ButtonBox/ButtonBox'
import Gist from 'super-react-gist'
import ReadingList from '../components/ReadingList/ReadingList'
import TopicCard from '../components/TopicCard/TopicCard'
import ErrorForm from '../components/ErrorForm/ErrorForm'
import ErrorFormWithList from '../components/ErrorForm/ErrorFormWithList'
import ErrorFormInlineError from '../components/ErrorForm/ErrorFormInlineError'
import ExampleFormContainer from '../components/ExampleFormContainer/ExampleFormContainer'
import DecorativeList from '../components/DecorativeList/DecorativeList'
import DecorativeImageExample from '../components/DecorativeImageExample/DecorativeImageExample'
import '../pages/style.css'
import postStyle from './postStyle.module.css'
import SectionContainer from '../components/SectionContainer/SectionContainer'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const category = post.frontmatter.category
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

    const previewListItems = post.frontmatter.keyTakeaways.map((x, index) => {
      const key = `key-takeaway-${index}`
      return <li key={key}>{x}</li>
    })

    const furtherReadingListItems = post.frontmatter.readingList.map(
      (x, index) => {
        const key = `reading-list-${index}`
        return (
          <li key={key}>
            <a href={x.url}>{x.description}</a>
          </li>
        )
      }
    )

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.displayTitle}
          description={post.frontmatter.description}
          keywords={[...postKeywords, ...baseKeywords]}
        />
        <div className={postStyle.breadcrumbContainer}>
          <div className={postStyle.breadcrumbInner}>
            <Link to={`/${post.frontmatter.category}`}>
              {post.frontmatter.category}
            </Link>
          </div>
        </div>
        <SectionContainer className={postStyle.takewayContainer}>
          {category !== 'demo' && (
            <div className={postStyle.titleWrapper}>
              <div className={postStyle.titleColorBlock} />
              <div className={postStyle.titleDetailWrapper}>
                <h1>{post.frontmatter.displayTitle}</h1>
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
              TopicCard,
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
