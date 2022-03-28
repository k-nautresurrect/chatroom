import "./App.css";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAcWveBzqUwvZNcwbrmH6z5aVvB2R06PKQ",
  authDomain: "chatroom-proto.firebaseapp.com",
  projectId: "chatroom-proto",
  storageBucket: "chatroom-proto.appspot.com",
  messagingSenderId: "972632774936",
  appId: "1:972632774936:web:20437a5ebb1f170105666d",
  measurementId: "G-83RSVNC797"
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
