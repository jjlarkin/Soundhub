// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from 'axios'


// Helper functions for making API Calls
// We export the API helper
export default {

    // This function serves our purpose of running the query to geolocate.
    runQuery() {


        const APIKEY="ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm";
        // Figure out the geolocation
        // const queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;
        let queryURL = `https://api.napster.com/v2.1/tracks/top?apikey=${APIKEY}`;
        console.log(queryURL);

        return axios.get(queryURL).then(function (response) {
            // If get get a result, return that result's formatted address property
            for(var i = 0; i<response.data.tracks.length; i++){

                songs.push(response.data.tracks[i].previewURL);
                titles.push(response.data.tracks[i].name);

            }

        });
    },

    // This function hits our own server to retrieve the record of query results
    getSong() {
        const APIKEY="ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm";
        // Figure out the geolocation
        // const queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;
        let queryURL = `https://api.napster.com/v2.1/tracks/top?apikey=${APIKEY}`;

        return axios.get(queryURL);
    }
};
    // This function hits our own server to retrieve the record of query results
    getUser() {
        return axios.get("/api");
    },

    // This function posts new searches to our database.
    postUser(teamName) { // CREATE TEAM
        return axios.post("/api" , {teamName: teamName});
    }

    postUser(teamName, score) {//UPDATING SCORE 
        return axios.post("/api/score" , {teamName : teamName ,score: score});
    }
};
