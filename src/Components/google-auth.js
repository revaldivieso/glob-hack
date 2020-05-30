import firebase from 'firebase';

// LOGIN CON GOOGLE
export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      debugger;
    })
    .catch((err) => {
      debugger;
    });
};
