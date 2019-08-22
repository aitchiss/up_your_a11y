import React from 'react'
import formStyle from './errorForm.module.css'

class ErrorForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      emailInputInvalid: false,
    }

    this.fakeSubmit = this.fakeSubmit.bind(this)
  }

  fakeSubmit(e) {
    e.preventDefault()
    if (e.currentTarget.value === '') {
      this.setState({ emailInputInvalid: true })
    }
  }

  render() {
    const { emailInputInvalid } = this.state
    const errorMessage = emailInputInvalid ? 'Email should not be blank' : ''
    return (
      <form>
        <label htmlFor="email">Email</label>
        <input id="email" className={formStyle.formInput} required />
        <span className={formStyle.errorText}>{errorMessage}</span>
        <button
          type="submit"
          className={formStyle.formButton}
          onClick={this.fakeSubmit}
        >
          Submit
        </button>
      </form>
    )
  }
}

export default ErrorForm
