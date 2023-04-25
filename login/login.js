var car;
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getAuth, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'

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

const login = document.querySelector('.data');
login.addEventListener('submit', (e) => {
    e.preventDefault();

    car = login.carno.value;
    const password = login.pass.value;
    const carno = car.concat('@mail.com');
    
    signInWithEmailAndPassword(auth,carno,password)
    .then(() => {
        window.location.replace('../display.html');
        localStorage.setItem('car',car);
    })
    .catch(() => {
        alert("Wrong User credentials");
    })
})