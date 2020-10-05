import React from 'react'
import readingListStyle from './readingList.module.css'

export default function ReadingList({ items }) {
  const bullets = items.map((x, index) => (
    <li key={`reading-list-item-${index}`}>
      <a href={x.url}>{x.description}</a>
    </li>
  ))

  return (
    <div className={readingListStyle.readingList}>
      <h3>
        <span role="img" aria-hidden>
          &#x1F4D6;
        </span>{' '}
        Further Reading
      </h3>
      <ul>{bullets}</ul>
    </div>
  )
}
