import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBFOmSdGXxAH38HbOjnW3HMYbAxNeGWyAg",
  authDomain: "portfolio-a6f2a.firebaseapp.com",
  projectId: "portfolio-a6f2a",
  databaseURL: "https://portfolio-85569-default-rtdb.firebaseio.com/",
  storageBucket: "portfolio-a6f2a.appspot.com",
  messagingSenderId: "409575418016",
  appId: "1:409575418016:web:7d90ab98def355208441c5",
  measurementId: "G-KH1H0QMY1P",
};

firebase.initializeApp(firebaseConfig);

export const dataRef =firebase.database();
export default firebase;
