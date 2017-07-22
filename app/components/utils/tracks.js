import React, { Component } from 'react';
import axios from 'axios';


let songs =[];
let titles=[];

export default function songsToGuess(){



	return axios.get("https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm")

	.then(function(response){


		for(var i = 0; i<response.data.tracks.length; i++){

			songs.push(response.data.tracks[i].previewURL);
			titles.push(response.data.tracks[i].name);
		}

		//console.log(songs);
		//console.log(titles);


	})
	.catch((error) =>reject(error));





	}





