import React from 'react'
import MenuHeader from './MenuHeader'
import layoutStyle from './layoutStyle.module.css'

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
        <div className={layoutStyle.container}>{children}</div>
      </div>
    )
  }
}

export default Layout
