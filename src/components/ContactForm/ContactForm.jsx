import React from 'react'
import contactFormStyle from './contactForm.module.css'

class ContactForm extends React.Component {
  static verifyEmailFromRef(emailRef) {
    const emailRegex = new RegExp(/(.+)@(.+)\.(.+)/)
    return (
      ContactForm.verifyInputNotEmptyFromRef(emailRef) &&
      emailRegex.test(emailRef.current.value)
    )
  }

  static verifyInputNotEmptyFromRef(inputRef) {
    return (
      inputRef.current &&
      inputRef.current.value &&
      inputRef.current.value !== ''
    )
  }

  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.getErrorsList = this.getErrorsList.bind(this)

    this.state = {
      errors: [],
    }
  }

  nameRef = React.createRef()
  emailRef = React.createRef()
  messageRef = React.createRef()

  submitForm(e) {
    const errors = []

    if (!ContactForm.verifyInputNotEmptyFromRef(this.nameRef)) {
      errors.push({ id: 'name', error: 'Please enter your name' })
    }

    if (!ContactForm.verifyEmailFromRef(this.emailRef)) {
      errors.push({ id: 'email', error: 'Please enter a valid email' })
    }

    if (!ContactForm.verifyInputNotEmptyFromRef(this.messageRef)) {
      errors.push({ id: 'message', error: 'Please enter your message' })
    }

    if (errors.length > 0) {
      e.preventDefault()
    }
    this.setState({ errors })
  }

  getErrorsList() {
    const { errors } = this.state
    const errorListItems = errors.map(x => {
      return <li key={`error-li-${x.id}`}>{x.error}</li>
    })
    return <ul>{errorListItems}</ul>
  }

  render() {
    const { errors } = this.state
    const showErrors = errors.length > 0
    return (
      <React.Fragment>
        <h2>Contact Form</h2>
        {showErrors ? (
          <div role="alert" className={contactFormStyle.errorAlertBox}>
            <h3>Looks like there are some errors in your form...</h3>
            {this.getErrorsList()}
          </div>
        ) : null}

        <form
          className={contactFormStyle.formWrapper}
          method="post"
          action="#"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required="true"
            ref={this.nameRef}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            required="true"
            ref={this.emailRef}
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="6"
            required="true"
            ref={this.messageRef}
          />
          <button
            type="submit"
            className="submit-btn"
            onClick={this.submitForm}
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    )
  }
}

export default ContactForm
