
var firebase = require('firebase');
var Rebase = require('re-base');
var createReactClass = require('create-react-class');


//const base = Rebase.createReactClass({

	
		let config ={
  apiKey: "AIzaSyAKRVyHDoCfE6ehu_thLTNVrj8jgXXqOWs",
  authDomain: "soundhub-f6281.firebaseapp.com",
  databaseURL: "https://soundhub-f6281.firebaseio.com/",
  projectId: "soundhub-f6281",
  storageBucket:"gs://soundhub-f6281.appspot.com",
  messagingSenderId:"AAAAbBQBJAU:APA91bH8lF7z5bTsSaMOrf2MY-7-wYJxWFvZ1pPLebLsdbLcXoegmw4vILOJy-2Anl1irpu1wfVKVFO7Rce7Kip8GUSn9rSyVOE7E8x7hSkw3ooCI-7049PgYK0U5_rf83aq8GGYWqoY"
}
//let baseApp = firebase.initializeApp(config);
let base = firebase.initializeApp(config);

	
	//let base = Rebase.createClass(baseApp.database());
  //export const providerGoogle = new firebase.auth.GoogleAuthProvider();
   export const providerFacebook = new firebase.auth.FacebookAuthProvider();
    //export const providerGitbhub = new firebase.auth.GithubAuthProvider();
export const auth = base.auth();

export default base;