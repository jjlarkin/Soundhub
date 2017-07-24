import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import SpotifyPlayer from './SpotifyPlayer';
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
                <SpotifyPlayer/>
                {/*// hello*/}
                {/*// /!*<SearchBar />*!/*/}
                {/*//*/}
                {/*/!*<VideoDetail video={this.state.selectedVideo} />*!/*/}
                {/*/!*<VideoList*!/*/}
                    {/*onVideoSelect={selectedVideo => this.setState({selectedVideo})}*/}
                    {/*videos={this.state.videos} />*/}
            </div>
        );
    }
}

export default Main