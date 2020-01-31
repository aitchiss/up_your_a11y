import React from 'react'
import navStyle from './navigation.module.css'

export default function Navigation() {
  return (
    <nav>
      <ul className={navStyle.navList}>
        <li>
          <a href="#about" className={navStyle.navLink}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" className={navStyle.navLink}>
            Contact
          </a>
        </li>
        <li>
          <a href="#contribute" className={navStyle.navLink}>
            Contribute
          </a>
        </li>
      </ul>
    </nav>
  )
}
