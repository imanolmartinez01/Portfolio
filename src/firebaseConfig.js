
import { initializeApp } from 'firebase/app';
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBvJ4kYM4_XU9UMxflWe3y4qnK6MOHT7vQ",
    authDomain: "portfolio-38dc8.firebaseapp.com",
    projectId: "portfolio-38dc8",
    storageBucket: "portfolio-38dc8.appspot.com",
    messagingSenderId: "51930635992",
    appId: "1:51930635992:web:74b4d70afeaaa5612d01ad"
};
  
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);