import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    //state
    this.state = {
      users:[],
      loading: false
    }
  }
  
  getUser() {
    this.setState({
      loading:true
    })
    axios('https://api.randomuser.me/?nat=US&results=5').then(response => 
      this.setState({
        users: response.data.results,
        loading: false
      })
    );
  }

  componentDidMount() {
    this.getUser()
  }

  render () {
    return <table className="App customTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>          
      {!this.state.loading? this.state.users.map(user => 
        <tr key={user.id.value}>
          <td>{user.name.first} {user.name.last}</td>
          <td><a href={user.email}>{user.email}</a></td>
        </tr>
      ): <tr><td colSpan={2} className="loader">Loading...</td></tr>}
        </tbody>        
      </table>;
  } 
}

export default App;