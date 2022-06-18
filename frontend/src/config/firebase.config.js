import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBl8nd6NkX1gMns50Aq_Czv9LkC1P81ST8",
  authDomain: "sugar-cosmatics-clone.firebaseapp.com",
  projectId: "sugar-cosmatics-clone",
  storageBucket: "sugar-cosmatics-clone.appspot.com",
  messagingSenderId: "748554504665",
  appId: "1:748554504665:web:7b88cb2329ca51c494b1c8",
  measurementId: "G-0L8NBEME9L",
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export const auth = getAuth(app);

export default app;
