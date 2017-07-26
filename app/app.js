// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";


// Include the main Parent Component
import Main from "./components/Main";
import base from './components/base';
import Login from './components/login';
import "./sass/main.scss";


class App extends React.Component {
  constructor() {
    super();

    this.addTeam = this.addTeam.bind(this);
    this.updateTeam = this.updateTeam.bind(this);     

 

  state = {
<<<<<<< HEAD
    team: {},
    highestScore: {}
=======
    teams: {}, 
    highestScore: {}  
>>>>>>> 78b7e70447c3a69698a32ca4fca063e469d2f1e2
  };

   }

  componentWillMount() {
    // this runs right before the <App> is rendered
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: 'teams'
    });

    // check if there is any order in localStorage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

    if(localStorageRef) {
      // update our App component's order state
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }

  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
  }

  // addTeam(teams) {
  //   // update our state
  //   const teams = this.state.teams;
  //   // add in our new fish
  //   const timestamp = Date.now();
  //   teams[`team-${timestamp}`] = team;
  //   // set state
  //   this.setState({ teams });
  // }

  updateTeam (key, updatedTeam) {
    let teams = this.state.teams;
    teams[key] = updatedTeam;
    this.setState({ teams });
  }
}
// This code here allows us to render our main component (in this case Parent)
ReactDOM.render(<Main/>, document.getElementById("app"));
