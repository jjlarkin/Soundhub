import React, {Component} from 'react';
import base from './base';
import HighScore from'./HighScore';
import Team from './Team'

class Login extends Component {
    constructor(props){
        super(props);
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.logout = this.logout.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.state = {
      userId: null,
      password: null
    }
        
    }

     componentDidMount() {
    base.onAuth((user) => {
      if(user) {
        this.authHandler(null, { user });
      }
    });
  }

   authenticate(provider) {
    console.log(`Trying to log in with ${provider}`);
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  logout() {
    base.unauth();
    this.setState({ userId: null });
  }

  authHandler(err, authData)  {
    console.log(authData);
    if (err) {
      console.error(err);
      return;
    }

}

    renderLogin() {
    return (
      <nav className="login">
        <h2>Inventory</h2>
        <p>Sign in to SOUNDHUB!!!</p>
        <button className="github" onClick={() => this.authenticate('github')}>Log In with Github</button>
        <button className="facebook" onClick={() => this.authenticate('facebook')} >Log In with Facebook</button>
        <button className="google" onClick={() => this.authenticate('google')} >Log In with Google</button>
      </nav>
    )
  }


 render() {
    const logout = <button onClick={this.logout}>Log Out!</button>;

    // check if they are no logged in at all
    if(!this.state.userId) {
      return <div>{this.renderLogin()}</div>
    }

    return (
      <div>
       HighScore
      </div>
    )
  }

}
export default Login;
