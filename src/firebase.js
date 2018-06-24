import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyA8Up12fnOciEkb-rHB8F1zPi1dlYdTLok",
    authDomain: "book-finder-1656c.firebaseapp.com",
    databaseURL: "https://book-finder-1656c.firebaseio.com",
    projectId: "book-finder-1656c",
    storageBucket: "book-finder-1656c.appspot.com",
    messagingSenderId: "450400210729"
  };
  firebase.initializeApp(config);

const databaseRef = firebase.database().ref();

export {databaseRef};