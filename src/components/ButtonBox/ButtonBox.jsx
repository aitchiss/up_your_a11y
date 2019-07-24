import React, { Component } from 'react'
// import './style.scss';

class ButtonBox extends Component {
  render() {
    const {
      wrapperClassName,
      buttonAriaLabel,
      buttonText,
      description,
    } = this.props
    return (
      <div className={`button-wrapper ${wrapperClassName}`}>
        <p>{description}</p>
        <button className="cta-btn">
          <span aria-label={buttonAriaLabel}>{buttonText}</span>
        </button>
      </div>
    )
  }
}

export default ButtonBox
