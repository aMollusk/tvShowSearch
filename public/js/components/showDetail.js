import React, { Component, PropTypes } from 'react';
import _ from 'lodash'
import Schedule from './Schedule'

export default class ShowDetail extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    const show     = this.props.show
    const schedule = this.props.schedule
    return (
      <div>
        { this.props.loading && (
          <h1>Loading</h1>
        )}
        {!(Object.keys(show).length === 0 && show.constructor === Object) && (
          <div className="show">
            <h1>{show.name}</h1>
            {(show.image !== null) && (
            <img src={show.image.medium} />
            )}
            <div className="show-summary" dangerouslySetInnerHTML={{__html: show.summary}}></div>
            <Schedule schedule={schedule} />

          </div>
        )}

      </div>
    )
  }



}

export default ShowDetail
