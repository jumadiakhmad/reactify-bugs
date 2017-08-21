import React from 'react'

class ReportList extends React.Component {
  render() {
    const { item } = this.props
    console.log('ini data item', item);

    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
          BugId: {item.id}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            {item.description}
            <span className="tag is-info">{item.severity}</span>
            <p>Assigned To: {item.assignedTo}</p>
          </div>
          <br />
          <small className="tag is-primary">{item.status}</small>
        </div>
        <footer className="card-footer">
          <a id={item.id} className="is-warning card-footer-item" onClick={this.props.handleEdit}>Close</a>
          <a id={item.id} className="card-footer-item" onClick={this.props.handleDelete}>Delete</a>
        </footer>
      </div>
    )
  }
}


export default ReportList
