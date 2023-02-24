// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMG3BH8Au_M_VZdTQ6QUTkTFMQT1fjNkY",
  authDomain: "duber-client.firebaseapp.com",
  projectId: "duber-client",
  storageBucket: "duber-client.appspot.com",
  messagingSenderId: "603010753059",
  appId: "1:603010753059:web:46bf30f2aaf17d16430796"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;