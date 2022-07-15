import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEJ_GZTbJnH2m5hkxI0D66T2RUTzIYv00",
  authDomain: "cown-clothing-db.firebaseapp.com",
  projectId: "cown-clothing-db",
  storageBucket: "cown-clothing-db.appspot.com",
  messagingSenderId: "329874873845",
  appId: "1:329874873845:web:2e80cc1b316ac05c3e54bc",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const CreatUserDocFromuth = async (userAuth) => {
  const userDucRef = doc(db, "users", userAuth.uid);
  console.log(userDucRef);
  const userSnapshot = await getDoc(userDucRef);
  
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDucRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("errore creating the user ", error.message);
    }
  }
  return userDucRef;
};
