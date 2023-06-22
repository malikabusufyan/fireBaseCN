// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAtruQcPWGtYO6Q5RNXGYbdd0ulGd7qxI",
  authDomain: "blogging-app-4a1e6.firebaseapp.com",
  projectId: "blogging-app-4a1e6",
  storageBucket: "blogging-app-4a1e6.appspot.com",
  messagingSenderId: "788334512630",
  appId: "1:788334512630:web:45c4c21835d0f32d4ddfd7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
