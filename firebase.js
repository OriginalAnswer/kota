import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    getFirestore,
    collection,
    // addDoc,
    setDoc,
    // getDocs,
    onSnapshot,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCcUc8THNhbWEKKBm_9qPfbeDq5IfhOnd4",
    authDomain: "kota-f0398.firebaseapp.com",
    projectId: "kota-f0398",
    storageBucket: "kota-f0398.appspot.com",
    messagingSenderId: "538192370596",
    appId: "1:538192370596:web:d1ad32d59a6a4526037f31",
    // measurementId: "G-32WBFVHV6M"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const saveCL = (text, statu, when) => setDoc(doc(db, "checklist", when), {text,statu,when});
export const onGetCL = (callback) => onSnapshot(collection(db, 'checklist'), callback);
export const deleteCL = id => deleteDoc(doc(db, 'checklist', id));