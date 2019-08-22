import React from 'react'
import MenuHeader from './MenuHeader'
import layoutStyle from './layoutStyle.module.css'
import Footer from './Footer/Footer'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = <MenuHeader expanded location={location} />
    } else {
      header = header = <MenuHeader location={location} />
    }
    return (
      <React.Fragment>
        {header}
        <main>
          <div className={layoutStyle.container}>{children}</div>
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Layout
