import React from 'react'
import SectionContainer from '../SectionContainer/SectionContainer'
import contributeStyle from './contribute.module.css'

export default function Contribute() {
  return (
    <SectionContainer className={contributeStyle.sectionContainer}>
      <h2 id="contribute">contribute</h2>
      <p>
        Up Your A11y is open source, and contributions are welcome:{' '}
        <a href="https://github.com/aitchiss/up_your_a11y">
          Visit the GitHub repository
        </a>
      </p>
      <h2>donate</h2>
      <p>
        To date, this site and its tutorials are 100% created and maintained by
        me, Suzanne. If you’d like to support the work I do, please consider
        buying me a coffee:
      </p>
      <a
        href="https://www.buymeacoffee.com/mgkZuRU"
        className={contributeStyle.coffeeLink}
      >
        <img
          className={contributeStyle.coffeeImage}
          src="https://cdn.buymeacoffee.com/buttons/lato-white.png"
          alt="Buy Me A Coffee"
        />
      </a>
    </SectionContainer>
  )
}
