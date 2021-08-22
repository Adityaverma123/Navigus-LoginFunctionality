import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAPJP5NtBNptxlqDBikI5JNwEIebGkswIc",
  authDomain: "navigus-teacher.firebaseapp.com",
  projectId: "navigus-teacher",
  storageBucket: "navigus-teacher.appspot.com",
  messagingSenderId: "1080553222537",
  appId: "1:1080553222537:web:394c240e259ccee4f17158",
  measurementId: "G-EB22VWKQC5",
};
const firebaseTeacher = firebase.initializeApp(firebaseConfig, "secondary");
export default firebaseTeacher;
