import React, { Component } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player'

class Game extends React.Component {



songsToGuess = function() {
var songs =[];
let titles=[];

     return axios.get("https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm")

        .then(function (response) {

            for (var i = 0; i < response.data.tracks.length; i++) {

                songs.push(response.data.tracks[i].previewURL);
                titles.push(response.data.tracks[i].name);
            }
            
             render () {
    return <ReactPlayer url=songs[(math.random).songs.length] playing />
  }


            //console.log(songs);
            //console.log(titles);


        })
        .catch((error) => reject(error));



}
  




export default Game;



// render () {
  //   return <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
  // }


//    render() {
//     const { details, index } = this.props;
//     // const HighScore = details.score === 0;
    
//     return (
//         <li className="dopeTeam">
        
//         <h3 className="Team-name">  {details.name}  </h3>

//         <p>{details.score}</p>
        
//       </li>

//     )
//   }

// }
