import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCWnv7aSl9hPxXd0hcjNEnVRQ0FZjk-GU0",
    authDomain: "twitter-app-react-8486c.firebaseapp.com",
    projectId: "twitter-app-react-8486c",
    storageBucket: "twitter-app-react-8486c.appspot.com",
    messagingSenderId: "988653412389",
    appId: "1:988653412389:web:aee90bb18794b9c8361fcc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;