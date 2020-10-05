import React from 'react'
import buttonboxStyles from './buttonbox.module.css'

export default function ButtonBox({
  wrapperClassName,
  buttonAriaLabel,
  buttonText,
  description
}) {
  return (
    <div className={`${buttonboxStyles.buttonWrapper} ${wrapperClassName}`}>
      <p className={buttonboxStyles.boxText}>{description}</p>
      <button className={buttonboxStyles.bbButton}>
        <span aria-label={buttonAriaLabel}>{buttonText}</span>
      </button>
    </div>
  )
}
