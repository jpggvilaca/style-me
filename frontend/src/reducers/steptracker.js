const initialState = {
  previousStep: 0,
  currentStep: 1,
  nextStep: 2
}

const moveStep = (state = initialState, action) => {
  switch (action.type) {
    case 'GO_FORWARD':
      return {
        previousStep: state.previousStep + 1,
        currentStep: state.currentStep + 1,
        nextStep: state.nextStep + 1
      }

    case 'GO_BACK':
    return {
      previousStep: state.previousStep - 1,
      currentStep: state.currentStep - 1,
      nextStep: state.nextStep - 1
    }

    default:
      return state
  }
}

export default moveStep
