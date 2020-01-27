import React, { useState } from 'react'
import contactFormStyle from './contactForm.module.css'

export default function ContactForm() {
  const emailRegex = new RegExp(/(.+)@(.+)\.(.+)/)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmitForm = e => {
    const errors = {}

    if (!name || name === '') {
      errors.name = 'Please enter your name'
    }

    if (!email || email === '' || !emailRegex.test(email)) {
      errors.email = 'Please enter a valid email'
    }

    if (!message || message === '') {
      errors.message = 'Please enter your message'
    }

    if (Object.keys(errors).length > 0) {
      e.preventDefault()
    }
    setErrors(errors)
  }

  const getErrorsList = () => {
    const errorListItems = Object.keys(errors).map(x => {
      return <li key={`error-li-${x}`}>{errors[x]}</li>
    })
    return <ul>{errorListItems}</ul>
  }

  const showErrors = Object.keys(errors).length > 0

  return (
    <React.Fragment>
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
        <label htmlFor="name">name</label>
        <input
          type="text"
          className={errors.name ? contactFormStyle.error : null}
          name="name"
          id="name"
          required
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="email">email</label>
        <input
          type="text"
          className={errors.email ? contactFormStyle.error : null}
          name="email"
          id="email"
          required
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="message">message</label>
        <textarea
          className={errors.message ? contactFormStyle.error : null}
          name="message"
          id="message"
          rows="6"
          required
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit" className="submit-btn" onClick={handleSubmitForm}>
          submit
        </button>
      </form>
      {showErrors ? (
        <div role="alert" className={contactFormStyle.errorAlertBox}>
          <h3 className={contactFormStyle.error}>
            Looks like there are some errors in your form...
          </h3>
          {getErrorsList()}
        </div>
      ) : null}
    </React.Fragment>
  )
}
