import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAWdv9GdhlqvAPFXofttfF0ZLhRx633oCk",
    authDomain: "portfolio-4130a.firebaseapp.com",
    databaseURL: "https://portfolio-4130a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "portfolio-4130a",
    storageBucket: "portfolio-4130a.appspot.com",
    messagingSenderId: "311148594518",
    appId: "1:311148594518:web:4eac7ed72115c88e1d42f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

var name = document.getElementById("name");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var message = document.getElementById("message");
var send = document.getElementById("send");

// Save message to firebase
function saveMessage() { 
    const db = getDatabase();
    const reference = ref(db, "Messages/" + name.value);

    set(reference, {
        name: name.value,
        email: email.value,
        subject: subject.value, 
        message: message.value
    })
}

send.addEventListener("click", saveMessage);