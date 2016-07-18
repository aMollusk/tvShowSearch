import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash'
import * as searchActions from '../actions/search'
import * as showActions from '../actions/shows'

import ShowDetail from './ShowDetail'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.selectShow = this.selectShow.bind(this)
    this.handleChange = _.debounce(this.handleChange.bind(this), 1000)
  }

  submitForm() {
    console.log('submit happening')
    this.props.dispatch(searchActions.searchShows(this.searchInput.value))
  }

  selectShow(show) {
    this.props.dispatch(showActions.getShow(show))
  }

  handleChange(){
    this.submitForm()
  }

  render() {


    console.log(this)
    return (
      <div>
        <div className="searchBar">
          <input placeholder="Search for a T.V. show" onChange={this.handleChange} ref={(ref) => this.searchInput = ref} type="text" name="title" />
          { this.props.search.loading && (
            <h1>Loading</h1>
          )}
          <ul className="searchList">
            { this.props.search.results.map((item, index) => {
              return (
                <li key={index} onClick={() => { this.selectShow(item.show.id)}}>{item.show.name}</li>
              )
            })}
          </ul>
        </div>
        <div className="detailBar">
          <ShowDetail {...this.props.show} />
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    search: state.search,
    show: state.show
  };
}

export default connect(mapStateToProps)(Home)
