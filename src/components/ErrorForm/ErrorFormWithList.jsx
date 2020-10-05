import React, { useRef, useState } from 'react'
import formStyle from './errorForm.module.css'

export default function ErrorFormWithList() {
  const emailRef = useRef(null)
  const [emailInputValid, setEmailInputValid] = useState()

  const handleSubmit = e => {
    const { value } = emailRef.current
    const isEmailInputValid = value !== ''
    setEmailInputValid(isEmailInputValid)
    // Handle submission of form if all fields valid
    e.preventDefault()
  }

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
          ref={emailRef}
          id="email-with-list"
          className={formStyle.formInput}
          required
          aria-invalid={emailInputValid === false ? true : null}
        />
        <button
          type="submit"
          className={formStyle.formButton}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  )
}
