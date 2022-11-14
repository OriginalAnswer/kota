import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDHpjPdzK9-sJNpB4FM6ukRLFhD_EXHxGo",
  authDomain: "kota-db.firebaseapp.com",
  projectId: "kota-db",
  storageBucket: "kota-db.appspot.com",
  messagingSenderId: "131801852138",
  appId: "1:131801852138:web:c9f98ef5841450edfdcf93"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);