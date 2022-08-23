import React from 'react'
import copyrightStyle from './copyright.module.css'

export default function Copyright() {
  return (
    <footer className={copyrightStyle.footer}>
      <div className={copyrightStyle.innerContainer}>
        <p>&copy; Suzanne Aitchison 2022</p>
      </div>
    </footer>
  )
}
