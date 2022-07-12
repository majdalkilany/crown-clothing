import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCEJ_GZTbJnH2m5hkxI0D66T2RUTzIYv00",
    authDomain: "cown-clothing-db.firebaseapp.com",
    projectId: "cown-clothing-db",
    storageBucket: "cown-clothing-db.appspot.com",
    messagingSenderId: "329874873845",
    appId: "1:329874873845:web:2e80cc1b316ac05c3e54bc"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt : 'select_account',
  });
  export const auth = getAuth();
  export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider);

