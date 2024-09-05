// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ3VC6CoEruJf-V_I63Rz-3OmEMKUqCeQ",
  authDomain: "ratemyinternships-9bd70.firebaseapp.com",
  projectId: "ratemyinternships-9bd70",
  storageBucket: "ratemyinternships-9bd70.appspot.com",
  messagingSenderId: "578655927539",
  appId: "1:578655927539:web:e2e1d48ce5df513069cb86",
  measurementId: "G-KJHXY70E91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { storage, firestore };