import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore';
import 'firebase/storage';

    const firebaseConfig = {
        apiKey: "AIzaSyBYIHbZqFeJv5K2ZT4GKoDS4-C6RTDHY5g",
        authDomain: "employee-manager-changed.firebaseapp.com",
        projectId: "employee-manager-changed",
        storageBucket: "employee-manager-changed.appspot.com",
        messagingSenderId: "1045676586480",
        appId: "1:1045676586480:web:69f494a13fbc5b81b95935",
        measurementId: "G-R0X000SEHH"
      };


      const firebaseApp = firebase.initializeApp(firebaseConfig);

      export default firebaseApp;