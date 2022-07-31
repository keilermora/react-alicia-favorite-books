import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyB6UAap4ggzb5MfgbC3Sydyxv-eCvhZx00',
  authDomain: 'alicia-s-favorite-books.firebaseapp.com',
  projectId: 'alicia-s-favorite-books',
  storageBucket: 'alicia-s-favorite-books.appspot.com',
  messagingSenderId: '700189519272',
  appId: '1:700189519272:web:3cb7d6c518b0403714c19d',
};

initializeApp(firebaseConfig);

export const db = getFirestore();
