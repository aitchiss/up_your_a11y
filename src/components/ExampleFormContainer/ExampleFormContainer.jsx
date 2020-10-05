import React from 'react'
import formContainerStyle from './formContainer.module.css'

export default function ExampleFormContainer({ children }) {
  return (
    <div className={formContainerStyle.wrapper}>
      {children}
    </div>
  )
}
