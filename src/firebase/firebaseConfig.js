import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdqYEML1dt8HeV1Xk0E76N5ui3xaTK5Sc",
    authDomain: "employee-manager-rc.firebaseapp.com",
    projectId: "employee-manager-rc",
    storageBucket: "employee-manager-rc.appspot.com",
    messagingSenderId: "59335524900",
    appId: "1:59335524900:web:e8237936911060ec63ceb1",
    measurementId: "G-8RM43NXK9Y"
  };


  //adds configs to initialize;
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp;
  
