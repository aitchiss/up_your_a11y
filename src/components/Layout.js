import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import MenuHeader from './MenuHeader'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = <MenuHeader expanded />
    } else {
      header = header = <MenuHeader />
    }
    return (
      <div>
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
