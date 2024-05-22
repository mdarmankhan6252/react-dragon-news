import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCBZrCpX8pRRbjicG8BpzryEo47B73MTjg",
  authDomain: "dragon-news-auth-4b56a.firebaseapp.com",
  projectId: "dragon-news-auth-4b56a",
  storageBucket: "dragon-news-auth-4b56a.appspot.com",
  messagingSenderId: "586308571815",
  appId: "1:586308571815:web:9122cb73815650fada8182"
};


const app = initializeApp(firebaseConfig);
export default app;