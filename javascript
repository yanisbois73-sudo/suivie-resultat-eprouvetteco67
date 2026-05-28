import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, set, push, get, child, remove, onValue } 
    from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBtCXnGsUhzfuGw3xEzIUNX8YfhrLOzarE",
  authDomain: "suivie-resultat-eprouvet-21641.firebaseapp.com",
  databaseURL: "https://suivie-resultat-eprouvet-da18a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "suivie-resultat-eprouvet-21641",
  storageBucket: "suivie-resultat-eprouvet-21641.firebasestorage.app",
  messagingSenderId: "837060273044",
  appId: "1:837060273044:web:37967fd7a0f5944de6a581",
  measurementId: "G-6BTP3FLK48"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, set, push, get, child, remove, onValue };
