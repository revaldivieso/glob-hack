import * as firebase from 'firebase';
//import * as firebase from 'firebase/app';
//import 'firebase/auth';

let firebaseConfig = {
  apiKey: 'AIzaSyCJhad0E8nAmwp1huC9GNPKtdIeJPmvfzc',
  authDomain: 'glob-hack.firebaseapp.com',
  databaseURL: 'https://glob-hack.firebaseio.com',
  projectId: 'glob-hack',
  storageBucket: 'glob-hack.appspot.com',
  messagingSenderId: '145033265328',
  appId: '1:145033265328:web:81845e711c77e5758e3b75',
  measurementId: 'G-YD0X751M61',
};
// Initialize Firebase
let db = firebase.initializeApp(firebaseConfig);

export default db;
