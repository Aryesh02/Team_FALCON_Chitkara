//var n,v,a,s;
var car;
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getAuth, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'
import {getFirestore, getDoc, doc, query, where} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBAwjLeqKlkyJtxIER4aYZ3A1jt9UiWet0",
    authDomain: "falcon-d0292.firebaseapp.com",
    projectId: "falcon-d0292",
    storageBucket: "falcon-d0292.appspot.com",
    messagingSenderId: "158849894862",
    appId: "1:158849894862:web:d626fb8859a0e02a3cc39f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();


// function check()
// {
//     const car = document.getElementById('carno').value;
//     const password = document.getElementById('pass').value;
//     const carnumber = car.concat('@mail.com');
//     console.log("hello");
//     signInWithEmailAndPassword(auth,carnumber,password)
//     .then(() => {
//         window.location.replace('display.html');
//         console.log("hello");
//     })
//     .catch(() => {
//         alert("Wrong User credentials");
//     })
// }

const login = document.querySelector('.data');
login.addEventListener('submit', (e) => {
    e.preventDefault();

    car = login.carno.value;
    const password = login.pass.value;
    const carno = car.concat('@mail.com');
    
    signInWithEmailAndPassword(auth,carno,password)
    .then(() => {
        window.location.replace('display.html');
        console.log("hello");
        localStorage.setItem('car',car);
    })
    .catch(() => {
        alert("Wrong User credentials");
    })
})
// export{car};



// Initialize Firebase
// const db = getFirestore();
// const display = document.querySelector('.data');
// display.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const car = login.carno.value;
//     const docRef = doc(db, "Users/", +car);
//     const docSnap =  getDoc(docRef);
//     console.log(docSnap.data().Name);
    // document.getElementById("div1").innerHTML = a;
    // document.getElementById("div2").innerHTML = a;
    // document.getElementById("div3").innerHTML = a;
    // document.getElementById("div4").innerHTML = a;
//})

// function display()
// {
//     const carno = document.getElementById('carno').value;
//     const docRef = doc(db, "Users/", + carno);
//     const docSnap =  getDoc(docRef);
//     console.log(docSnap.data().Name);
// }

// const db = getFirestore()
//         const colRef = collection(db,'Users/'+car);
//         const q = query(colRef,where('Vehicle Number','==',car))
//         onSnapshot(q, (querySnapshot) =>{
//             querySnapshot.forEach((doc) => {
//             n = doc.data().Name;
//             v = doc.data().Vehicle_Number;
//             a = doc.data().Amount;
//             s = doc.data().Status;
//             });
//         })