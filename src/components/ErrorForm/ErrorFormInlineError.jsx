import React, { useRef, useState } from 'react'
import formStyle from './errorForm.module.css'

export default function ErrorFormInlineError() {
  const emailRef = useRef(null)
  const [emailInputValid, setEmailInputValid] = useState()

  const validateEmail = value => value !== '';

  const handleChange = () => {
    setEmailInputValid(true)
  }

  const handleBlur = () => {
    const { value } = emailRef.current
    const isEmailInputValid = validateEmail(value)
    setEmailInputValid(isEmailInputValid)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { value } = emailRef.current
    if (!validateEmail(value)) {
      setEmailInputValid(false)
      return
    }
    // Handle any actions for valid form submissions
  }

  const errorMessage =
    emailInputValid === false ? 'Email should not be blank' : ''

  return (
    <form>
      <label htmlFor="email-inline">Email</label>
      <input
        ref={emailRef}
        id="email-inline"
        aria-invalid={emailInputValid === false ? true : null}
        onBlur={handleBlur}
        onChange={handleChange}
        className={formStyle.formInput}
      />
      <div role="alert">
        <span className={formStyle.errorText}>{errorMessage}</span>
      </div>
      <button
        type="submit"
        className={formStyle.formButton}
        onClick={handleSubmit}
        aria-disabled={emailInputValid === true ? null : true}
      >
        Submit
      </button>
    </form>
  )
}
