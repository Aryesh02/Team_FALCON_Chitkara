import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getFirestore,collection, doc, onSnapshot,query, where, updateDoc,} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBAwjLeqKlkyJtxIER4aYZ3A1jt9UiWet0",
    authDomain: "falcon-d0292.firebaseapp.com",
    projectId: "falcon-d0292",
    storageBucket: "falcon-d0292.appspot.com",
    messagingSenderId: "158849894862",
    appId: "1:158849894862:web:d626fb8859a0e02a3cc39f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

const car = localStorage.getItem('car');

const colRef = collection(db,'Users');
const q = query(colRef,where('Vehicle_Number','==',car))

onSnapshot(q, (querySnapshot) =>{
    querySnapshot.forEach((doc) => {
        const n = doc.data().Name;
        const v = doc.data().Vehicle_Number;
        const a = doc.data().Amount;
        const s = doc.data().Status;
        console.log(n,v,a,s);
        document.getElementById("div1").innerHTML = n;
        document.getElementById("div2").innerHTML = v;
        document.getElementById("div3").innerHTML = a;
        document.getElementById("div4").innerHTML = s;
        
    });
})
