import React from "react";
import ReactDOM from 'react-dom';
import AudioPlayer from 'react-responsive-audio-player';

import '../sass/index.scss';


  


var playlist =
    [{ url: 'audio/track1.mp3',

        displayText: 'Track 1 by Some Artist' },
        { url: 'audio/track2.mp3',
            displayText: 'Some Other Artist - Track 2' }];


class PlayButton extends React.Component {


     render () {
        return (

            <AudioPlayer playlist={playlist} hideBackSkip={true} />
        );
    }

}

export default PlayButton




