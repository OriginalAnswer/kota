import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
    getFirestore,
    collection,
    // addDoc,
    setDoc,
    // getDocs,
    onSnapshot,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAuebheyVUbKc5DzVI4XqcybuY_zx1QWtQ",
    authDomain: "todo-669ab.firebaseapp.com",
    projectId: "todo-669ab",
    storageBucket: "todo-669ab.appspot.com",
    messagingSenderId: "476614684921",
    appId: "1:476614684921:web:0ad46063a872b856713228"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
// ---------------------------------------------------------------------------------------------
export const saveRate1 = (text, statu, when) => setDoc(doc(db, "rate-1", when), {text,statu,when});
export const getRate1 = (callback) => onSnapshot(collection(db, 'rate-1'), callback);
export const deleteRate1 = id => deleteDoc(doc(db, 'rate-1', id));
// ---------------------------------------------------------------------------------------------
export const saveRate2 = (text, statu, when) => setDoc(doc(db, "rate-2", when), {text,statu,when});
export const getRate2 = (callback) => onSnapshot(collection(db, 'rate-2'), callback);
export const deleteRate2 = id => deleteDoc(doc(db, 'rate-2', id));
// ---------------------------------------------------------------------------------------------
export const saveRate3 = (text, statu, when) => setDoc(doc(db, "rate-3", when), {text,statu,when});
export const getRate3 = (callback) => onSnapshot(collection(db, 'rate-3'), callback);
export const deleteRate3 = id => deleteDoc(doc(db, 'rate-3', id));
// ---------------------------------------------------------------------------------------------
export const saveRate4 = (text, statu, when) => setDoc(doc(db, "rate-4", when), {text,statu,when});
export const getRate4 = (callback) => onSnapshot(collection(db, 'rate-4'), callback);
export const deleteRate4 = id => deleteDoc(doc(db, 'rate-4', id));
// ---------------------------------------------------------------------------------------------
export const saveRate5 = (text, statu, when) => setDoc(doc(db, "rate-5", when), {text,statu,when});
export const getRate5 = (callback) => onSnapshot(collection(db, 'rate-5'), callback);
export const deleteRate5 = id => deleteDoc(doc(db, 'rate-5', id));
// ---------------------------------------------------------------------------------------------
export const saveRate6 = (text, statu, when) => setDoc(doc(db, "rate-6", when), {text,statu,when});
export const getRate6 = (callback) => onSnapshot(collection(db, 'rate-6'), callback);
export const deleteRate6 = id => deleteDoc(doc(db, 'rate-6', id));
