import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import AddTeamForm from './AddTeamForm'




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

            </div>
        );
    }
}

export default Main