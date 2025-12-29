// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDuWCMbYmz4R1tohCReIryjfLGiiRJ8oOo",
//   authDomain: "gallant-69c58.firebaseapp.com",
//   projectId: "gallant-69c58",
//   storageBucket: "gallant-69c58.appspot.com",
//   messagingSenderId: "65707808830",
//   appId: "1:65707808830:web:854cd8f75a73665b7ad96f"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBZJ_WiE5gd6gfdpj3WC22obDGNGE2Tms8",
  authDomain: "livelearning-5e710.firebaseapp.com",
  // databaseURL: "https://livelearning-5e710-default-rtdb.firebaseio.com",
  projectId: "livelearning-5e710",
  storageBucket: "livelearning-5e710.firebasestorage.app",
  messagingSenderId: "735445630172",
  appId: "1:735445630172:web:866bb6522bd48c4abdc819",
  // measurementId: "G-Q32WNBMSF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { app, database };
