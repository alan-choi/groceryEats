import fireConfig from '../../config';
import Firebase from 'firebase';
Firebase.initializeApp(fireConfig);

const database = Firebase.database();
// function writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });

function receiveDataPost(res){
  console.log("POST SUCCESS!", res);
  return {
    type: "POST_SUCCESS",
    res
  }
}

function signOutUser(){
  return Firebase.auth().signOut();
}

function receiveCurrentUser(user) {
  console.log("RECEIVED USER", user);
  return {
    type: "LOGIN_USER",
    user
  }
}

function displayError(err) {
  console.log("ERROR", err);
  return {
    type: "ERROR",
    err
  }
}

export const submitPost = (postId, raw) => {
  console.log("SUBMITTING POST", raw);
  return dispatch => {
    let data = {
      raw: raw
    }
    return Firebase.database().ref('posts/'+postId).set(data)
      .then((res) => dispatch(receiveDataPost(res)))
      .catch((err) => dispatch(displayError(err)))
  }
}

export const loginUser = (email, password) => {
  console.log("LOGGING IN USER");
  return dispatch => {
    return Firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => dispatch(receiveCurrentUser(res)))
      .catch((err) => dispatch(displayError(err)))
  }
}

export const getCurrentUser = () => {
  let currentUser = Firebase.auth().currentUser;
  console.log("found current User", currentUser);
  return currentUser;
  // return dispatch()
}

export const logOutUser = () => {
  console.log("LOGGING OUT USER");
  return dispatch => {
    return Firebase.auth().signOut()
      .then(()=> dispatch(receiveCurrentUser(null)))
      .catch((err) => dispatch(displayError(err)))
  }
}
