import Rebase from "re-base";
import firebase from "firebase";

// Web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCe-RiZDPCx9WP8qtEMxeXW6yPfz6lqb58",
  authDomain: "catch-of-the-day-e8c26.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-e8c26.firebaseio.com"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;
