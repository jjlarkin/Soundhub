import React from "react";
import ReactDOM from 'react-dom';
import AudioPlayer from 'react-responsive-audio-player';

import '../sass/index.scss';


var playlist =

    [{ url: 'http://listen.vo.llnwd.net/g3/5/2/1/9/2/1216729125.mp3',

        displayText: 'Track 1 by Some Artist' },

        { url: 'http://listen.vo.llnwd.net/g3/5/6/3/1/7/1282571365.mp3',

        displayText: 'Track 1 by Some Artist' },
         { url: 'http://listen.vo.llnwd.net/g2/3/9/8/4/4/915244893.mp3',

        displayText: 'Track 1 by Some Artist' },
         { url: 'http://listen.vo.llnwd.net/g1/2/1/3/5/4/1042645312.mp3',

        displayText: 'Track 1 by Some Artist' },
         { url: 'http://listen.vo.llnwd.net/g1/4/1/5/1/2/104721514.mp3',

        displayText: 'Track 1 by Some Artist' },
        { url: 'http://listen.vo.llnwd.net/g3/0/2/2/3/5/1317253220.mp3',

        displayText: 'Track 1 by Some Artist' },
        { url: 'http://listen.vo.llnwd.net/g3/4/1/9/1/5/1302051914.mp3',

            displayText: 'Track 1 by Some Artist' },
        { url: 'http://listen.vo.llnwd.net/g3/1/9/5/4/8/1332884591.mp3',

            displayText: 'Track 1 by Some Artist' },
        { url: 'http://listen.vo.llnwd.net/g3/9/6/4/0/9/1332690469.mp3',

            displayText: 'Track 1 by Some Artist' },
        { url: 'http://listen.vo.llnwd.net/g3/3/0/1/9/9/1344599103.mp3',

            displayText: 'Track 1 by Some Artist' },
        { url: 'http://listen.vo.llnwd.net/g3/2/3/0/6/2/1332326032.mp3',

            displayText: 'Track 1 by Some Artist' },
        { url: 'http://listen.vo.llnwd.net/g3/6/4/4/4/6/1340864446.mp3.mp3',

            displayText: 'Track 1 by Some Artist' },
        { url: 'http://listen.vo.llnwd.net/g3/3/6/7/0/0/1326600763.mp3',
            displayText: 'Some Other Artist - Track 2' }];


class PlayButton extends React.Component {


     render () {
        return (

            <AudioPlayer playlist={playlist} hideBackSkip={true} />
        );
    }

}

export default PlayButton




