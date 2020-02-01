import React from 'react'
import sectionStyle from './section.module.css'

export default function SectionContainer({ children, className }) {
  return (
    <section className={className ? className : ''}>
      <div className={sectionStyle.innerContainer}>{children}</div>
    </section>
  )
}
