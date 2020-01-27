import React from 'react'
import SectionContainer from '../SectionContainer/SectionContainer'
import aboutStyle from './about.module.css'

export default function About() {
  return (
    <SectionContainer className={aboutStyle.sectionContainer}>
      <h2 id="about">about</h2>
      <p>
        Up Your A11y is run by me, Suzanne, a software developer based in
        Edinburgh, Scotland. A few years ago I began to realise how little I
        understood about web accessibility, despite working in a mid-level
        developer role for some major national brands. In trying to fill this
        gap in my knowledge, I found lots of great resources and started
        collecting notes and examples. These became the basis of Up Your A11y,
        which I’ve built in the hope that it will help other developers place
        accessibility at the heart of their work.
      </p>
      <p>
        I found it most difficult to find resources relating to Single Page
        Applications, which is why Up Your A11y has a specific React section,
        and I hope in future this will expand to cover other frameworks.
      </p>

      <p>
        I'm learning every day, and committed to expanding this site with more
        topics and examples. I would definitely value engagement from anyone who
        visits, so please don’t hesitate to get in touch via the details below.
      </p>
    </SectionContainer>
  )
}
