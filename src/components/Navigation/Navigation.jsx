import React from 'react'
import { Link } from 'gatsby'
import navStyle from './navigation.module.css'

class Navigation extends React.Component {
  render() {
    const { location } = this.props
    const activePage = location.pathname

    return (
      <nav>
        <ul className={navStyle.navList}>
          <li>
            <Link
              to="/about"
              className={
                activePage === '/about'
                  ? `${navStyle.navLink} ${navStyle.activePage}`
                  : `${navStyle.navLink} ${navStyle.inactivePage}`
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={
                activePage === '/contact'
                  ? `${navStyle.navLink} ${navStyle.activePage}`
                  : `${navStyle.navLink} ${navStyle.inactivePage}`
              }
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/contribute-to-a11y-in-oss"
              className={
                activePage === '/contribute-to-a11y-in-oss'
                  ? `${navStyle.navLink} ${navStyle.activePage}`
                  : `${navStyle.navLink} ${navStyle.inactivePage}`
              }
            >
              Contribute to OSS
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
