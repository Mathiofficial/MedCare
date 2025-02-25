import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBC7TkAct4PfmmdtG8pr79d5yZiP4Owfgk",
    authDomain: "medcare-ef1f9.firebaseapp.com",
    projectId: "medcare-ef1f9",
    storageBucket: "medcare-ef1f9.firebasestorage.app",
    messagingSenderId: "817848114124",
    appId: "1:817848114124:web:e643c9964d776b3f959b69",
    measurementId: "G-0XCYR87R1V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
