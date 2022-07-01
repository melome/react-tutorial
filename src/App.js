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
    return <div className="App">
      <table className="customTable">
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
      {!this.state.loading? this.state.users.map(user => 
        <tr>
          <td>{user.name.first} {user.name.last}</td>
          <td>{user.email}</td>
        </tr>
      ): <div>Loading...</div>}
      </table>
    </div>;
  } 
}

export default App;