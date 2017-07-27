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
      <div>
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
    </div>
  }
  </div>
</div>
<section className='display-team'>
    <div className="wrapper">
      <ul>
        {this.state.teams.map((team) => {
          return (
            <li key={team.id}>
              <h3>{team.teamName}</h3>
              <p>Score: {team.score}
                 {team.user === this.state.user.displayName || team.user === this.state.user.email ?
                   <button onClick={() => this.removeteam(team.id)}>Remove Team</button> : null}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  </section>

</div>
        );
    }
  }

  export default Login;