// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAECXxl9umbDHc5lASWMmt13V1keATPqo",
  authDomain: "b8a9-event-management-ruhannn.firebaseapp.com",
  projectId: "b8a9-event-management-ruhannn",
  storageBucket: "b8a9-event-management-ruhannn.appspot.com",
  messagingSenderId: "436165195627",
  appId: "1:436165195627:web:7354567d94c5524e797e2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
