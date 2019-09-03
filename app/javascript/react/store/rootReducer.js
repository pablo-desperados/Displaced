import { combineReducers } from 'redux'
import {drawing, addLine, addMovement} from '../modules/drawing'

const rootReducer = combineReducers({
  drawing
})

export default rootReducer
