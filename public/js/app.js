// import 'babelify/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { fromJS } from 'immutable'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers/index'


require('../styles/main.scss')

const $app = document.getElementById('ReactApp')


if ($app) {
  let initialState = window.__INITIAL_STATE__ || {}

  const loggerMiddleware = createLogger()

  const store = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore)(reducer, initialState)

  ReactDOM.render(
    <Provider store={store}>
      <Router children={routes} history={browserHistory} />
    </Provider>,
    $app
  )
}
