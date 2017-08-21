import React  from 'react'
import Header from './components/Header'
import FormBug from './components/FormBug'
import ListBug from './components/ListBug'
import Footer from './components/Footer'

// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bugs: [],
      id: '',
      description: '',
      severity: '',
      assignedTo: '',
      status: ''
    }

    this.handleDesc = this.handleDesc.bind(this)
    this.handleAssignTo = this.handleAssignTo.bind(this)
    this.handleSeverity = this.handleSeverity.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleDesc(e) {
    console.log(e.target.value);
    this.setState({description: e.target.value})
  }
  handleAssignTo(e) {
    console.log(e.target.value);
    this.setState({assignedTo: e.target.value})
  }
  handleSeverity(e) {
    console.log(e.target.value);
    this.setState({severity: e.target.value})
  }

  componentWillMount() {
    let bugs = JSON.parse(localStorage.getItem('bugs')) || []
    this.setState({
      bugs: bugs
    })
    console.log('data waktu willmount', bugs);
  }

  handleSubmit(e) {
    e.preventDefault()

    const bug = {
      id: new Date(),
      description: this.state.description,
      severity: this.state.severity,
      assignedTo: this.state.assignedTo,
      status: 'Open'
    }

    console.log('data yang input: ', bug);

    this.setState({
      bugs: this.state.bugs.push(bug)
    })
    // console.log('#########', this.state.bugs);

    localStorage.setItem('bugs', JSON.stringify(this.state.bugs))

    this.componentWillMount()

    this.setState({
      description: '',
      severity: '',
      assignedTo: '',
    })
  }

  handleDelete(e) {
    console.log('data target delete', e.target.id);
    let bugs = JSON.parse(localStorage.getItem('bugs'))
    if (bugs.length > 0) {
      let bugs = JSON.parse(localStorage.getItem('bugs'))
      alert('Apakah anda yakin ingin hapus report ini?')

      let remainingBugs = bugs.filter((item, index) => item.id !== e.target.id)
      localStorage.setItem('bugs', JSON.stringify(remainingBugs))
      console.log(remainingBugs);
      this.componentWillMount()
    } else {
      return (
        alert('Data is empty')
      )
    }
  }

  handleEdit(e) {
    console.log('di app.js', e.target.id);
    let bugs = JSON.parse(localStorage.getItem('bugs'))

    alert('Apaka anda yakin ingin close?')
    let updatedBugs = bugs.map((item) => {
      if (item.id === e.target.id)
        item.status = 'Close'
      return item
    })

    localStorage.setItem('bugs', JSON.stringify(updatedBugs))

    this.componentWillMount()
  }

  render() {
    return (
      <div>
        <Header />
        <FormBug description={this.state.description} assignedTo={this.state.assignedTo} severity={this.state.severity} handleSubmit={this.handleSubmit} handleDesc={this.handleDesc} handleAssignTo={this.handleAssignTo} handleSeverity={this.handleSeverity} />
        <hr />
        <ListBug bugs={this.state.bugs} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
        <Footer/>
      </div>
    );
  }
}

export default App;
