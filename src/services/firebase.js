import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMQoG-JQ6VZluiIGponVEy2HKJuPF8Cfs",
  authDomain: "chamados-v7.firebaseapp.com",
  projectId: "chamados-v7",
  storageBucket: "chamados-v7.appspot.com",
  messagingSenderId: "643196019920",
  appId: "1:643196019920:web:82d80c3ea72dde29d9aad5",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase