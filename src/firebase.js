import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC4IbRRwwkd8K0R_uXgeud7U6acJ03Eqvk",
  authDomain: "react-authentication-49a15.firebaseapp.com",
  projectId: "react-authentication-49a15",
  storageBucket: "react-authentication-49a15.appspot.com",
  messagingSenderId: "936008870318",
  appId: "1:936008870318:web:caff6f9f9988b16a77803f",
  measurementId: "G-YC21BYWCYL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
//const analytics = getAnalytics(app);
