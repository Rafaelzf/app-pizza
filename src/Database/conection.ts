import firebase from "firebase/app";
import "firebase/auth"; // for authentication
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime database
import "firebase/firestore"; // for cloud firestore
import "firebase/messaging"; // for cloud messaging
import "firebase/functions"; // for cloud functions

const config = {
	apiKey: "AIzaSyASO7FpiB5q-P5fAfme1ZBso8MPMfLuL80eeeeee",
	authDomain: "make-pizza-b3b76.firebaseapp.com",
	databaseURL: "https://make-pizza-b3b76.firebaseio.com",
	projectId: "make-pizza-b3b76",
	storageBucket: "qmake-pizza-b3b76.appspot.com",
	messagingSenderId: "551774906145",
	appId: "1:551774906145:web:18a20b5c6ad80186a64060",
};

export default !firebase.apps.length
	? firebase.initializeApp(config)
	: firebase.app();
