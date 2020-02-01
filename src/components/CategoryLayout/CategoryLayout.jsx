import React from 'react'
import categoryLayoutStyle from './categoryLayout.module.css'
import { Link } from 'gatsby'
import MenuHeader from '../MenuHeader'
import SectionContainer from '../SectionContainer/SectionContainer'

export default function CategoryLayout({ title, articles = [] }) {
  console.log(articles)
  const categoryListItems = articles.map((article, index) => {
    const { frontmatter } = article
    const { slug } = article.fields

    const key = `article-list-item-${index}`
    return (
      <li key={key} className={categoryLayoutStyle.articleListItem}>
        <div className={categoryLayoutStyle.articleBullet} />
        <div className={categoryLayoutStyle.articleDetail}>
          <Link to={slug} className={categoryLayoutStyle.articleLink}>
            <h2 className={categoryLayoutStyle.articleTitle}>
              {frontmatter.displayTitle}
            </h2>
          </Link>
          <p className={categoryLayoutStyle.articleDescription}>
            {frontmatter.description}
          </p>
        </div>
      </li>
    )
  })

  return (
    <>
      <MenuHeader />
      <main>
        <div className={categoryLayoutStyle.titleWrapper}>
          <div className={categoryLayoutStyle.titleInner}>
            <Link to="/" className={categoryLayoutStyle.homeLink}>
              Home
            </Link>
            <h1 className={categoryLayoutStyle.title}>{title}</h1>
          </div>
        </div>
        <SectionContainer>
          <ul className={`plainList ${categoryLayoutStyle.articleList}`}>
            {categoryListItems}
          </ul>
        </SectionContainer>
      </main>
    </>
  )
}
