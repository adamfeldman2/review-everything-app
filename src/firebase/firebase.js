import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCf4ohk7DeLLNAzuWsdE_Ixk_ULkdOSxPE',
  authDomain: 'review-everything-app.firebaseapp.com',
  databaseURL: 'https://review-everything-app.firebaseio.com',
  projectId: 'review-everything-app',
  storageBucket: '',
  messagingSenderId: '716284551877'
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
