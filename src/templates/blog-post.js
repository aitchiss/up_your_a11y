import React from 'react'
import { Link, graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ButtonBox from '../components/ButtonBox/ButtonBox'
import Gist from 'super-react-gist'
import ReadingList from '../components/ReadingList/ReadingList'
import TopicCard from '../components/TopicCard/TopicCard'
import ExampleFormContainer from '../components/ExampleFormContainer/ExampleFormContainer'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const category = post.frontmatter.category
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        {category === 'demo' ? (
          <MDXRenderer
            scope={{ ButtonBox, Gist, ReadingList, TopicCard, Link, ExampleFormContainer }}
          >
            {post.code.body}
          </MDXRenderer>
        ) : (
          <React.Fragment>
            <TopicCard
              topic={{
                title: post.frontmatter.displayTitle,
                keyTakeaways: post.frontmatter.keyTakeaways,
              }}
              accentColor={post.frontmatter.accentColor}
              headingLevel="1"
              showButton={false}
              header
            />
            <MDXRenderer
              scope={{ ButtonBox, Gist, ReadingList, TopicCard, Link, ExampleFormContainer }}
            >
              {post.code.body}
            </MDXRenderer>
            <ReadingList items={post.frontmatter.readingList} />
          </React.Fragment>
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
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        displayTitle
        category
        accentColor
        keyTakeaways
        readingList {
          url
          description
        }
      }
      code {
        body
      }
    }
  }
`
