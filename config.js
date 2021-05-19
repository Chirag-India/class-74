import * as firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyD2D7MxjBp2CeL4YL3I040MW1irNFV69z8",
  authDomain: "wily-ab366.firebaseapp.com",
  databaseURL: "https://wily-ab366.firebaseio.com",
  projectId: "wily-ab366",
  storageBucket: "wily-ab366.appspot.com",
  messagingSenderId: "500665317514",
  appId: "1:500665317514:web:08b9d2f092f68c7ec81573"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
