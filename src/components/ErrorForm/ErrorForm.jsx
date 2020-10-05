import React, { useState } from 'react'
import formStyle from './errorForm.module.css'

export default function ErrorForm() {
  const [emailInputInvalid, setEmailInputInvalid] = useState(false)

  const fakeSubmit = e => {
    e.preventDefault()
    if (e.currentTarget.value === '') {
      setEmailInputInvalid(true)
    }
  }

  const errorMessage = emailInputInvalid ? 'Email should not be blank' : ''
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input id="email" className={formStyle.formInput} required />
      <span className={formStyle.errorText}>{errorMessage}</span>
      <button
        type="submit"
        className={formStyle.formButton}
        onClick={fakeSubmit}
      >
        Submit
      </button>
    </form>
  )
}
