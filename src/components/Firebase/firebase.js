import app from "firebase/app";
import "firebase/auth";
import 'firebase/database';

var config = {
    apiKey: "AIzaSyCWfA_mKHn6Tgy9WCcmjdWggY5imIck3bI",
    authDomain: "custom-claims-b6b78.firebaseapp.com",
    databaseURL: "https://custom-claims-b6b78-default-rtdb.firebaseio.com",
    projectId: "custom-claims-b6b78",
    storageBucket: "custom-claims-b6b78.appspot.com",
    messagingSenderId: "777240287559",
    appId: "1:777240287559:web:d2c197eb955f6ca2afd462",
    measurementId: "G-LE2CMVSYNS"
  };
  class Firebase {
      constructor(){
          app.initializeApp(config);

          this.auth = app.auth();
          this.db = app.database();
      }

      //*** Auth API ***/

      doCreeateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

      doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

      doSignOut = () => this.auth.signOut();

      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

      doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

      //*** User API ***/

      user = uid => this.db.ref(`users/${uid}`);
      
      users = () => this.db.ref('users');
  }

  export default Firebase;