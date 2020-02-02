import React from 'react'
import navStyle from './navigation.module.css'
import { Link } from 'gatsby'

export default function Navigation() {
  return (
    <nav aria-label="main navigation">
      <ul className={navStyle.navList}>
        <li>
          <Link to="/#about" className={navStyle.navLink}>
            About
          </Link>
        </li>
        <li>
          <Link to="/#contact" className={navStyle.navLink}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/#contribute" className={navStyle.navLink}>
            Contribute
          </Link>
        </li>
      </ul>
    </nav>
  )
}
