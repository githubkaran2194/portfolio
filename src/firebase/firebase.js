import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDtYVSioa8tNvTPw_zzYPlVdBBleQsaL9I",
  authDomain: "portfolio-karan-40360.firebaseapp.com",
  databaseURL: "https://portfolio-karan-40360-default-rtdb.firebaseio.com",
  projectId: "portfolio-karan-40360",
  storageBucket: "portfolio-karan-40360.appspot.com",
  messagingSenderId: "719120505638",
  appId: "1:719120505638:web:82b02b7effe99f7067ffe7",
  measurementId: "G-E6C8S556ZH"
};

const firebaseApp = initializeApp(firebaseConfig);
const databaseURL = getDatabase(firebaseApp)
export default databaseURL;
