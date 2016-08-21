import fireConfig from '../../config';
import Firebase from 'firebase';
Firebase.initializeApp(fireConfig);

// const fireRef = new Firebase(fireConfig);

export const loginUser = (email, password)=>{
      Firebase.auth().signInWithEmailAndPassword(email, password).catch((error)=>{
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(error)
    })
  }

export const getCurrentUser = () => {
  let currentUser = Firebase.auth().currentUser;
  console.log(currentUser);
  return currentUser;
}
