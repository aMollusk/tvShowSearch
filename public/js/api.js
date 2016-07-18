import $ from "jquery"
// import _ from "underscore"

let BASE_URL = "http://api.tvmaze.com"

class API {

  static findShows(searchTerm) {
    let url = BASE_URL + "/search/shows?q=" + searchTerm;
    return API.getJSON(url)
  }

  static getShow(id) {
    let url = BASE_URL + "/shows/" + id
    return API.getJSON(url)
  }
  //  Wrappers
  static getJSON(url) {
    return $.getJSON(url)
  }

}

export default API
