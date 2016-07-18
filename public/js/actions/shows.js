import * as types from '../constants'
import API from '../api'

export function getShow(term) {
  return(dispatch) => {
    dispatch(gettingShow())
    API.getShow(term)
      .done((data) => {
        dispatch(recieveShow(data))
      })
      .fail(() => {
        dispatch(recieveShowError())
      })
  }
}

function gettingShow() {
  return {
    type: types.GETTING_SHOW
  }
}

function recieveShow(showDetail) {
  console.log(showDetail)
  return {
    type: types.RECIEVE_SHOW,
    payload: showDetail
  }
}
