import React, {Component} from 'react';

import base, { auth, providerFacebook } from './base.js';

import Scoreboard from'./Scoreboard';

import Team from './Team'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      teamName: '',
      score: 0,
      teams: [],
      user: null 
    }
  this.login = this.login.bind(this); 
  this.logout = this.logout.bind(this);
  }

  handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  });

  }
logout() {
  auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  
}
login() {
  auth.signInWithPopup(providerFacebook ) 
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
    });
}

componentDidMount() {
  auth.onAuthStateChanged((user) => {
    if (user) {
      this.setState({ user });
    } 
  });
    }


    render(){
      return(
        <div className = ".head2">

        <div className="wrapper">
  <h1>SOUNDHUB</h1>
  {this.state.user ?
    <button onClick={this.logout}>Log Out</button>                
    :
    <button onClick={this.login}>Log In</button>              
  }
</div>
<div className=".head2">
 {this.state.user ?
    <div>
      <div className='user-profile'>
        <img src={this.state.user.photoURL} />
      </div>
    </div>
    :
    <div className='wrapper'>
      <p>Please Login to start playing.</p>
      <Link to="/Main">Game</Link>
      <Route path="/Main" component={Main}/>
    </div>
  }
  </div>
</div>
        );
    }
  }

  export default Login;