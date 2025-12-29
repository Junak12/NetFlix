import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAvsGwYN2P4jMEKjpCaf57nxmVpQMynx70",
  authDomain: "netflix-8bcb1.firebaseapp.com",
  projectId: "netflix-8bcb1",
  storageBucket: "netflix-8bcb1.firebasestorage.app",
  messagingSenderId: "997115329336",
  appId: "1:997115329336:web:37682a11d1565060addfcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// SIGN UP function
const signup = async (name, email, password) => {
  try {
    if (!email || !email.includes("@")) {
      throw new Error("Please enter a valid email");
    }

    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Store user info in Firestore
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      email,
      authProvider: "local"
    });


    return user;
  } catch (error) {
    console.error(error);
    toast.error(error.message)

  }
};

// LOGIN function
const login = async (email, password) => {
  try {
    if (!email || !email.includes("@")) {
      throw new Error("Please enter a valid email");
    }
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (error) {
    console.error(error);
    toast.error(error.message)
  }
};

// LOGOUT function
const logout = async () => {
  await signOut(auth);
  
};

export { auth, db, signup, login, logout };
