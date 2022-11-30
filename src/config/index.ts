import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, DB_HOST, DB_PORT, DB_DATABASE, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN } = process.env;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDn8RvQqYTtc7Efq2U1kOGxMRBKGKJ8eEQ",
//   authDomain: "psconde-db341.firebaseapp.com",
//   projectId: "psconde-db341",
//   storageBucket: "psconde-db341.appspot.com",
//   messagingSenderId: "625863126877",
//   appId: "1:625863126877:web:b552ba3d6cf48be523c2b4",
//   measurementId: "G-2FFRJ4T69L"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
