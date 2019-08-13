import React from 'react'
import formContainerStyle from './formContainer.module.css'

class ExampleFormContainer extends React.Component {

  render() {
    const { children } = this.props;

    return(
      <div className={formContainerStyle.wrapper}>
        {children}
      </div>
    )
  }
}

export default ExampleFormContainer