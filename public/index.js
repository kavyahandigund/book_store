import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA0sSoL6xOA9HbaUin2WjoFQBjxcepwtMU",
    authDomain: "book-store-382ec.firebaseapp.com",
    projectId: "book-store-382ec",
    storageBucket: "book-store-382ec.appspot.com",
    messagingSenderId: "432081701635",
    appId: "1:432081701635:web:cdbd13ca7dca5c4975f736",
    measurementId: "G-44Q0X86QZV"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("succussfully registerd")
      window.location.href="login.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});