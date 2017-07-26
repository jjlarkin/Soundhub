
var firebase = require('firebase');
var Rebase = require('re-base');
var createReactClass = require('create-react-class');


//const base = Rebase.createReactClass({

	var baseApp = firebase.initializeApp({
  apiKey: "AIzaSyAKRVyHDoCfE6ehu_thLTNVrj8jgXXqOWs",
  authDomain: "soundhub-f6281.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-wes-bos.firebaseio.com",
  storageBucket:"gs://soundhub-f6281.appspot.com",
  messagingSenderId:"AAAAbBQBJAU:APA91bH8lF7z5bTsSaMOrf2MY-7-wYJxWFvZ1pPLebLsdbLcXoegmw4vILOJy-2Anl1irpu1wfVKVFO7Rce7Kip8GUSn9rSyVOE7E8x7hSkw3ooCI-7049PgYK0U5_rf83aq8GGYWqoY"
});

	
	let base = Rebase.createClass(baseApp.database());

export default base;