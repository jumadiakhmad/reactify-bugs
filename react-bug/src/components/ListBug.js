import React from 'react'

import ReportList from './ReportList'

class ListBug extends React.Component {

  render() {
    console.log('data bugs', this.props.bugs);
    if (this.props.bugs.length > 0) {
      return (

        <div className="columns is-mobile">
          <div className="column is-medium">
            {this.props.bugs.map((item, index) => {
              return (
                <ReportList item={item} key={index} handleDelete={this.props.handleDelete} handleEdit={this.props.handleEdit}/>
              )
            })}
          </div>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }

  }
}

export default ListBug
