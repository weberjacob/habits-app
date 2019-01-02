import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBf9mUsSr0FiHxFbw4fprCxc7wxW0AlmuM",
  authDomain: "habits-app-61340.firebaseapp.com",
  databaseURL: "https://habits-app-61340.firebaseio.com"
  // projectId: "habits-app-61340",
  // storageBucket: "",
  // messagingSenderId: "470037602032"
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;
