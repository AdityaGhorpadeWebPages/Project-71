import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD-Be3yWKW81WAraXJCGupZBiku42S9Jz8",
  authDomain: "project-71-cd026.firebaseapp.com",
  projectId: "project-71-cd026",
  storageBucket: "project-71-cd026.appspot.com",
  messagingSenderId: "333710473005",
  appId: "1:333710473005:web:9ed0ef32f75b33e58c05a4"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
