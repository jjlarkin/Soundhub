// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from 'axios'


// Helper functions for making API Calls
// We export the API helper
export default {


    getSong() {
        const APIKEY="ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm";

        let queryURL = `https://api.napster.com/v2.1/tracks/top?apikey=${APIKEY}`;


        return axios.get(queryURL);
    },

    // This function hits our own server to retrieve the record of query results
    getUser(){
        return axios.get("/api");
    },

    // This function posts new searches to our database.
    postUser(teamName) { // CREATE TEAM
        return axios.post("/api" , {teamName: teamName});
    },

    postUser(teamName, score) {//UPDATING SCORE 
        return axios.post("/api/score" , {teamName : teamName ,score: score});

    }
};
