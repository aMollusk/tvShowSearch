import * as types from '../constants'
import initialState from './initialState'
import { assign } from 'lodash'


export default function showReducer(state = initialState.show, action) {
  switch (action.type) {
    case types.RECIEVE_SHOW:
      return {
        ...state,
        show: action.payload,
        loading: false
      }
    case types.RECIEVE_SCHEDULE:
      return {
        ...state,
        schedule: action.payload
      }
    case types.GETTING_SHOW:
      return {
        ...state,
        show: {},
        loading: true
      }


    default:
      return state;
  }
}
