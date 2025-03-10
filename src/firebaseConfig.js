// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDGR-Gx5TKnMBoBCFP3-A710-uH27qVeig",
  authDomain: "miapp-integral-cce35.firebaseapp.com",
  projectId: "miapp-integral-cce35",
  storageBucket: "miapp-integral-cce35.firebasestorage.app",
  messagingSenderId: "647655000403",
  appId: "1:647655000403:web:817cb309c0b471133279a6",
  measurementId: "G-EY1D11FFRV"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén la instancia de Firestore
const db = getFirestore(app);

// Exporta la instancia de Firestore para que pueda ser usada en otros componentes
export { db };
