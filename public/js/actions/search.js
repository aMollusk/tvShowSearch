import * as types from '../constants'
import API from '../api'


export function searchShows(term) {
  return(dispatch) => {
    dispatch(searchingShows())
    API.findShows(term)
      .done((data) => {
        dispatch(recieveShows(data))
      })
      .fail(() => {
        dispatch(recieveShowsError())
      })
  }
}

function searchingShows() {
  return {
    type: types.SEARCHING_SHOWS
  }
}
function recieveShows(allShows) {
  return {
    type: types.RECIEVE_SHOWS,
    payload: allShows
  }
}
