import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';

class App extends Component {
  constructor(props) {
    super(props)
    //state
    this.state = {
      users:[],
      loading: false
    };
    //bind - anytime we create functions we add here
    this.handleOnClick = this.handleOnClick.bind(this) //binding the onclick function
  }
  
  getUser() {
    this.setState({
      loading:true
    })
    axios('https://api.randomuser.me/?nat=US&results=5').then(response => 
      this.setState({
        users: [...this.state.users, ...response.data.results], //merging existing and newly loaded users
        loading: true
      })
    );
  }

  handleOnClick(response) {
    response.preventDefault();
    this.getUser();
    console.log("Event Happened!");
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

      {!this.state.loading? 
        this.state.users.map(user => 
        <tr key={user.id.value}>
          <td>{user.name.first} {user.name.last}</td>
          <td><a href={user.email}>{user.email}</a></td>
        </tr>
      ): <Loading message="Loading users, please wait..."/>}
        </tbody>   
      {!this.state.loading?(
        <tfoot className="table-action">
          <tr>
            <td colSpan={2} className="load-button table-actions">
              <button onClick={this.handleOnClick} className="btn" >Load Users</button>
            </td>
          </tr>
        </tfoot>
      ):<tfoot></tfoot>}  
          
      </table>;
  } 
}

export default App;