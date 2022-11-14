import {app, database} from './firebaseComfig';
import { collection, addDoc } from 'firebase/firestore';

export default function App() {
    const collectionRef = collection(database, 'users');

    const handleSubmit = () => {
        addDoc (collectionRef, {
            e: data,
            p: pass
        })
        .then(() => {
            alert('data added')
        })
        .catch(() => {
            alert(err.message);
        })
    }
}