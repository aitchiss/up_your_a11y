import React from 'react'
import contactFormStyle from './contactForm.module.css'

export default function ContactForm() {
  return (
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
      <input type="text" name="name" id="name" required />
      <label htmlFor="email">email</label>
      <input type="text" name="email" id="email" required />
      <label htmlFor="message">message</label>
      <textarea name="message" id="message" rows="6" required />
      <button type="submit" className="submit-btn">
        submit
      </button>
    </form>
  )
}
