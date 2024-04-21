// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7WYw-dyuUme_ZA-tqxE31O6baQzQxPBk",
  authDomain: "netflixgpt-486e8.firebaseapp.com",
  projectId: "netflixgpt-486e8",
  storageBucket: "netflixgpt-486e8.appspot.com",
  messagingSenderId: "296328965339",
  appId: "1:296328965339:web:7a6ba417cc9c923fd5f0fe",
  measurementId: "G-KP2BEPC5ZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
