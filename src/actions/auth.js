import { firebase, googleAuthProvider } from '../firebase/firebase';

const login = (uid, email, accountCreation) => {
  return { type: 'LOGIN', uid, email, accountCreation };
};

const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export { login, logout, startLogin, startLogout };
