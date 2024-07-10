// Importar las funciones necesarias del SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";


// configuración del proyecto de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAL9_ERIpu_RgVj-HsR6TaVGw0jM9whcEg",
    authDomain: "prego-ec589.firebaseapp.com",
    projectId: "prego-ec589",
    storageBucket: "prego-ec589.appspot.com",
    messagingSenderId: "649041337576",
    appId: "1:649041337576:web:ddfe74b26d66149055fd5d"
  };
  
  // Inicializar Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

    // Verificar si la instancia de Firestore se obtuvo correctamente
    console.log("Instancia de Firestore:", db);

    export { db, auth };

