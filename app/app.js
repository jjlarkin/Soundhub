// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

// Include the main Parent Component
import Main from "./components/Main";
import Base from './components/Base';
import Login from './components/Login';
import "./sass/main.scss";


class App extends React.Component {
    constructor() {
        super();

        // this.addTeam = this.addTeam.bind(this);
        // this.updateTeam = this.updateTeam.bind(this);


        this.state = {
            teams: {},
            highestScore: {}
        };

    }

    componentWillMount() {
        // this runs right before the <App> is rendered
        // this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
        //   context: this,
        //   state: 'teams'
        // });





        // if(localStorageRef) {
        //   // update our App component's order state
        //   this.setState({
        //     order: JSON.parse(localStorageRef)
        //   });
        // }

    }

    // componentWillUnmount() {
    //     Base.removeBinding(this.ref);
    // }

    componentWillUpdate(nextProps, nextState) {
        // localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
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

    updateTeam(key, updatedTeam) {
        let teams = this.state.teams;
        teams[key] = updatedTeam;
        this.setState({teams});
    }

    render() {
        return (
            <Router>
                {/*Component Routes*/}
                <div>
                    {/*HomePage*/}
                    <Route exact path="/" component={() => <Main/>}/> {/*Login*/}
                    <Route exact path="/Main" component={() => <Main/>}/> {/*Login*/}
                </div>
            </Router>

        )
    }
}

    ReactDOM.render(<App/>, document.querySelector('#app'));

