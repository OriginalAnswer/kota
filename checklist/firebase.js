import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
    getFirestore,collection,setDoc,onSnapshot,deleteDoc,doc
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCcUc8THNhbWEKKBm_9qPfbeDq5IfhOnd4",
    authDomain: "kota-f0398.firebaseapp.com",
    projectId: "kota-f0398",
    storageBucket: "kota-f0398.appspot.com",
    messagingSenderId: "538192370596",
    appId: "1:538192370596:web:d1ad32d59a6a4526037f31"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const saveTodo = (text, statu, when) => setDoc(doc(db, "checklist", when), {text,statu,when});
export const onGetTodo = (callback) => onSnapshot(collection(db, 'checklist'), callback);
export const deleteTodo = id => deleteDoc(doc(db, 'checklist', id));