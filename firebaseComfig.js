import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc,setDoc,getDocs,onSnapshot,deleteDoc,doc} 
from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDHpjPdzK9-sJNpB4FM6ukRLFhD_EXHxGo",
  authDomain: "kota-db.firebaseapp.com",
  projectId: "kota-db",
  storageBucket: "kota-db.appspot.com",
  messagingSenderId: "131801852138",
  appId: "1:131801852138:web:c9f98ef5841450edfdcf93"
};

// export const app = initializeApp(firebaseConfig);
// export const database = getFirestore(app);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// 채팅
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

export const saveChat = (name, text, time, when) => setDoc(doc(db, "채팅", when), {name, text, time, when});
export const printChat = (callback) => onSnapshot(collection(db, '채팅'), callback);
