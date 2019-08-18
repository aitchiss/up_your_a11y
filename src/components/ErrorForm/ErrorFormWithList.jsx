import React from 'react'
import formStyle from './errorForm.module.css'

class ErrorFormWithList extends React.Component {
  emailRef = React.createRef()

  constructor(props) {
    super(props)

    this.state = {
      emailInputValid: undefined,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    const value = this.emailRef.current.value
    const emailInputValid = value !== ''
    this.setState({ emailInputValid })
    // Handle submission of form if all fields valid
    e.preventDefault()
  }

  render() {
    const { emailInputValid } = this.state
    const errorMessage = emailInputValid ? '' : 'Email should not be blank'
    return (
      <React.Fragment>
        {emailInputValid === false ? (
          <div role="alert">
            <p className={formStyle.errorListHeader}>
              Looks like there are some errors in your form:
            </p>
            <ul>
              <li>{errorMessage}</li>
            </ul>
          </div>
        ) : null}

        <form>
          <label htmlFor="email-with-list">Email</label>
          <input
            ref={this.emailRef}
            id="email-with-list"
            className={formStyle.formInput}
            required
            aria-invalid={emailInputValid === false ? true : null}
          />
          <button
            type="submit"
            className="submit-btn"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    )
  }
}

export default ErrorFormWithList
