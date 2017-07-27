import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Login from './Login'

import AddTeamForm from './AddTeamForm'

import Scoreboard from './Scoreboard'
import PlayButton from './PlayButton'





const API_KEY = 'AIzaSyBMdMQj26Y0O7vUk1HTFkd5BZR0ZPKnZDw';
// create a new component which should produce some html
class Main extends Component {
    constructor(props){
        super(props);
        this.state= {
            videos:[],
            selectedVideo: null
        };


    }
    render(){
        return (
            <div>
                <AddTeamForm/>

                {/*<HighScore/>*/}
                {/*<PlayButton/>*/}


                <Scoreboard/>
                <PlayButton/>
                


            </div>
        );
    }
}

export default Main