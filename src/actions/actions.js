// import fireConfig from '../../config';
// import Firebase from 'firebase';
// Firebase.initializeApp(fireConfig);

function fetchUser(email, password){
  return Firebase.auth().signInWithEmailAndPassword(email, password)
}

function signOutUser(){
  return Firebase.auth().signOut();
}

function recieveCurrentUser(user) {
  return {
    type: "LOGIN_USER",
    user
  }
}

export const loginUser = (email, password) => {
  return fetchUser(email, password).then((user) => {
    console.log('logged in this user', user);
    recieveCurrentUser(user);
    // return dispatch(res)
  }).catch((err)=>{
    console.log(err);
  })
  //   Firebase.auth().signInWithEmailAndPassword(email, password)
  //   .then((res) =>{
  //     console.log(res);
  //   })
  //   .catch((error)=>{
  //   let errorCode = error.code;
  //   let errorMessage = error.message;
  //   console.log(error)
  // })
}

export const getCurrentUser = () => {
  let currentUser = Firebase.auth().currentUser;
  console.log("found current User", currentUser);
  // return currentUser;
}

export const logOutUser = () => {
  signOutUser().then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err);
  })
  return {};
  // firebase.auth().signOut().then(function() {
  //   console.log('user logged out!');
  // }, function(error) {
  //   console.log(error);
  // });
}
