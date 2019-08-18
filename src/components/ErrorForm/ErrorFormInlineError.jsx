import React from 'react'
import formStyle from './errorForm.module.css'

class ErrorFormInlineError extends React.Component {
  emailRef = React.createRef()

  constructor(props) {
    super(props)

    this.state = {
      emailInputValid: undefined,
    }

    this.validateEmail = this.validateEmail.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  validateEmail(value) {
    return value !== ''
  }

  handleChange() {
    this.setState({ emailInputValid: true })
  }

  handleBlur() {
    const value = this.emailRef.current.value
    const emailInputValid = this.validateEmail(value)

    this.setState({ emailInputValid })
  }

  handleSubmit(e) {
    e.preventDefault()
    const value = this.emailRef.current.value
    if (!this.validateEmail(value)) {
      this.setState({ emailInputValid: false })
      return
    }
    // Handle any actions for valid form submissions
  }

  render() {
    const { emailInputValid } = this.state
    const errorMessage =
      emailInputValid === false ? 'Email should not be blank' : ''

    return (
      <form>
        <label htmlFor="email-inline">Email</label>
        <input
          ref={this.emailRef}
          id="email-inline"
          aria-invalid={emailInputValid === false ? true : null}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          className={formStyle.formInput}
        />
        <div role="alert">
          <span className={formStyle.errorText}>{errorMessage}</span>
        </div>
        <button
          type="submit"
          className={formStyle.formButton}
          onClick={this.handleSubmit}
          aria-disabled={emailInputValid === true ? null : true}
        >
          Submit
        </button>
      </form>
    )
  }
}

export default ErrorFormInlineError
