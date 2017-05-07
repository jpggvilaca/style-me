import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import steptracker from './steptracker'

const reducers = combineReducers({
  steptracker,
  form: formReducer
})

export default reducers
