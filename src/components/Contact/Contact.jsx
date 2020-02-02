import React from 'react'
import SectionContainer from '../SectionContainer/SectionContainer'
import ContactForm from '../ContactForm/ContactForm'
import contactStyle from './contact.module.css'

export default function Contact() {
  return (
    <SectionContainer>
      <h2 id="contact">contact</h2>
      <ul className={`plainList ${contactStyle.linksList}`}>
        <li>
          twitter:{' '}
          <a
            href="https://twitter.com/s_aitchison"
            aria-label="Twitter: @s_aitchison"
          >
            @s_aitchison
          </a>
        </li>
        <li>
          DEV:{' '}
          <a href="https://dev.to/s_aitchison" aria-label="Dev: s_aitchison">
            s_aitchison
          </a>
        </li>
      </ul>
      <ContactForm />
    </SectionContainer>
  )
}
