import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBUhx4dxJUYFzHGGPEdjaeIojxNDq_n8IY",
    authDomain: "grupo3tad.firebaseapp.com",
    projectId: "grupo3tad",
    storageBucket: "grupo3tad.appspot.com",
    messagingSenderId: "986192782427",
    appId: "1:986192782427:web:65310da89a146e53290b7e",
    measurementId: "G-71B97HRXD4"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  
  const button = document.getElementById("button");

  button.addEventListener('click', () => {
     signInWithPopup(auth, provider)
   .then((result) => {
     const credential = GoogleAuthProvider.credentialFromResult(result);
     const token = credential.accessToken;
     const user = result.user;
     window.location.href = "Pagina.html"
   }).catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     const email = error.customData.email;
     const credential = GoogleAuthProvider.credentialFromError(error);
   });
  })

console.log("Conexión a Firebase establecida correctamente.");