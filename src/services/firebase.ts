import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHcTP_cpSLCzr93RPnmYkwMQZweO7gVxg",
  authDomain: "teams-clone-75838.firebaseapp.com",
  projectId: "teams-clone-75838",
  storageBucket: "teams-clone-75838.appspot.com",
  messagingSenderId: "571575981206",
  appId: "1:571575981206:web:afe6543ee3c25582f91eb7"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);