import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import './forms.css'

class Step extends Component {
  render() {
    const { handleSubmit, step } = this.props

    return (
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email"/>
        </div>
        <button type="submit">Next</button>
      </form>
    )
  }
}

Step = reduxForm({
  form: 'mainform' // a unique name for this form
})(Step);

export default Step
