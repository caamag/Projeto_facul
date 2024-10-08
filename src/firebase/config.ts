import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCBg-RbIQRn8biT19kzPIpMHse1rOm3E9E",
    authDomain: "projeto-facul-750af.firebaseapp.com",
    projectId: "projeto-facul-750af",
    storageBucket: "projeto-facul-750af.appspot.com",
    messagingSenderId: "886350017777",
    appId: "1:886350017777:web:e697673840b8e82c236550",
    measurementId: "G-WSML58GW76"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };