import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AddTeamForm from './AddTeamForm'
// import HighScore from './HighScore'



const API_KEY = 'AIzaSyBMdMQj26Y0O7vUk1HTFkd5BZR0ZPKnZDw';
// create a new component which should produce some html
class Main extends Component {
    constructor(props){
        super(props);
        this.state= {
            videos:[],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>{
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });
        });
    }
    render(){
        return (
            <div>
                <AddTeamForm/>
                {/*<HighScore/>*/}
                

            </div>
        );
    }
}

export default Main