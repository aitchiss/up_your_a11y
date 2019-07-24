import React, { Component } from 'react'
import buttonboxStyles from './buttonbox.module.css'

class ButtonBox extends Component {
  render() {
    const {
      wrapperClassName,
      buttonAriaLabel,
      buttonText,
      description,
    } = this.props
    return (
      <div className={`${buttonboxStyles.buttonWrapper} ${wrapperClassName}`}>
        <p className={buttonboxStyles.boxText}>{description}</p>
        <button className={buttonboxStyles.bbButton}>
          <span aria-label={buttonAriaLabel}>{buttonText}</span>
        </button>
      </div>
    )
  }
}

export default ButtonBox
