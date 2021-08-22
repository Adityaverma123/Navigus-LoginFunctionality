import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAz8R5aHZShctRRYMbO23LDmmNFStZkeug",
  authDomain: "navigusdatabase.firebaseapp.com",
  projectId: "navigusdatabase",
  storageBucket: "navigusdatabase.appspot.com",
  messagingSenderId: "244398746714",
  appId: "1:244398746714:web:51bd3c98dea95cb946fc63",
  measurementId: "G-YLH1FTQ44N",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
