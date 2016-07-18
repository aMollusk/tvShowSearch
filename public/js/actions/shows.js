import * as types from '../constants'
import API from '../api'

export function getShow(id) {
  return(dispatch) => {
    dispatch(gettingShow())
    API.getShow(id)
      .done((data) => {
        dispatch(recieveShow(data))
      })
      .fail(() => {
        dispatch(recieveShowError())
      })

    API.getSchedule(id)
      .done((data) => {
        dispatch(recieveSchedule(data))
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
  return {
    type: types.RECIEVE_SHOW,
    payload: showDetail
  }
}
function recieveSchedule(schedule) {
  return {
    type: types.RECIEVE_SCHEDULE,
    payload: schedule
  }
}
