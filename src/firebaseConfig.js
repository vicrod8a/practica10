// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBIpwSjCKA9D_khn4n5oqrNLMkPQ4asnTo",
  authDomain: "miapp-integral-167c2.firebaseapp.com",
  projectId: "miapp-integral-167c2",
  storageBucket: "miapp-integral-167c2.firebasestorage.app",
  messagingSenderId: "826153900809",
  appId: "1:826153900809:web:5eebd8901fafd53c7911d8",
  measurementId: "G-D9PXHGS201"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén la instancia de Firestore
const db = getFirestore(app);

// Exporta la instancia de Firestore para que pueda ser usada en otros componentes
export { db };


