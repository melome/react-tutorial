import axios from 'axios';
import React, { Component } from 'react';

<<<<<<< HEAD
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React, Shanley!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
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
>>>>>>> remote
}

export default App;