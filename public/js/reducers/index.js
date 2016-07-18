import { combineReducers } from 'redux'
import search from './searchReducer'
import show from './showReducer'


const rootReducer = combineReducers({
  search,
  show
})

export default rootReducer
