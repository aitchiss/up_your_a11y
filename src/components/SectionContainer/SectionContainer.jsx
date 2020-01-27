import React from 'react'
import sectionStyle from './section.module.css'

export default function SectionContainer({ children, className }) {
  return (
    <section className={`${sectionStyle.container} ${className}`}>
      <div className={sectionStyle.innerContainer}>{children}</div>
    </section>
  )
}
