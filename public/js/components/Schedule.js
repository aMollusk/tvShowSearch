import React, { Component, PropTypes } from 'react';
import _ from 'lodash'


export default class Schedule extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    const episodes = this.props.schedule
    return (
      <div>
        <table>
        <tr>
          <th>Title</th>
          <th className="center">Season</th>
          <th className="center">Episode</th>
          <th>Air date</th>
        </tr>
          {episodes.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td className="center">{item.season}</td>
                <td className="center">{item.number}</td>
                <td>{item.airdate}</td>
              </tr>
            )
          })}
        </table>
      </div>
    )
  }



}

export default Schedule
