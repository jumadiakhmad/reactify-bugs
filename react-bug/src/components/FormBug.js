import React from 'react'


class FormBug extends React.Component{
  render() {
    return (
      <section>
        <div className="hero-body">
          <h2 className="title">Add New Bug Report : </h2>
          <form action="" id="bugInputForm">
            <label className="label" htmlFor="">Description</label>
            <p className="control">
              <input onChange={this.props.handleDesc} className="input" type="text" id="description" placeholder="Describe a bug"/>
            </p>
            <label className="label" htmlFor="">Severity</label>
            <p className="control">
              <span className="select">
                <select id="severity" name="severity" onChange={this.props.handleSeverity}>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </span>
            </p>
            <label className="control" htmlFor="">Assigned To</label>
            <p className="control">
              <input  onChange={this.props.handleAssignTo} className="input" type="text" id="assignedTo" placeholder="Enter Resposible..."/>
            </p>
            <div className="control is-grouped">
              <p className="control">
                <button className="button is-warning" onClick={this.props.handleSubmit}>Submit</button>
              </p>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default FormBug;
