import React, { Component } from 'react'
import { connect } from 'react-redux'
import { goForward, goBack } from '../../actions'

import Step from '../Step'
import {
  step1,
  step2,
  step3
} from '../../constants/stepDefaults'

const mapStateToProps = (state) => ({
  step: state.steptracker.currentStep
})

const mapDispatchToProps = ({
  goForward,
  goBack
})

class GetStarted extends Component {
  handleSubmit = (values) => {
    this.goForward()
  }

  goForward = () => {
    this.props.goForward()
  }

  goBack = () => {
    this.props.goBack()
  }

  render() {
    const { step } = this.props;
    const stepDefaults = [step1, step2, step3]

    return (
      <div className={'wrapper step-' + step}>
        <h1>Step {step}</h1>
        <Step
          onSubmit={this.handleSubmit}
          initialValues={stepDefaults[0]}
          step={step}
        />
      </div>
    );
  }
}

GetStarted = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetStarted)

export default GetStarted
