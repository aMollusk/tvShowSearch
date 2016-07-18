import * as types from '../constants'
import initialState from './initialState'
import { assign } from 'lodash'


export default function searchReducer(state = initialState.search, action) {
  switch (action.type) {
    case types.RECIEVE_SHOWS:
      return {
        ...state,
        results: action.payload,
        loading: false
      }
    case types.SEARCHING_SHOWS:
      return {
        ...state,
        results: [],
        loading: true
      }

    default:
      return state;
  }
}
