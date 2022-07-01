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
      {!this.state.loading? this.state.users.map(user => 
        <div key={user.login.uuid}>
          <p><strong>Name:</strong> {user.name.first} {user.name.last}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <hr />
        </div>
      ): <div>Loading...</div>}
    </div>;
  } 
}

export default App;