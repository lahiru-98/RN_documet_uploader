import { getFirestore } from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyApSzc7B_7VqSr7lbQq0egbRiokc9WMhRk",
    authDomain: "document-picker-dd0eb.firebaseapp.com",
    projectId: "document-picker-dd0eb",
    storageBucket: "document-picker-dd0eb.appspot.com",
    messagingSenderId: "313767201203",
    appId: "1:313767201203:web:584d191e08f731f9d2a3c6"
};

export const app = initializeApp(firebaseConfig);
// MARK: Firestore Reference
export const db = getFirestore(app);

export const storage = getStorage(app)