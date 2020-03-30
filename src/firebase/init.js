  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAeFM8VXDMAqbnkP73dhKbUKe_lIf8wvBM",
    authDomain: "strategease-2310e.firebaseapp.com",
    databaseURL: "https://strategease-2310e.firebaseio.com",
    projectId: "strategease-2310e",
    storageBucket: "strategease-2310e.appspot.com",
    messagingSenderId: "712988757966",
    appId: "1:712988757966:web:0a2213b2bf05db7ce7659f",
    measurementId: "G-48JVMQDME9"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebaseApp.firestore(); 