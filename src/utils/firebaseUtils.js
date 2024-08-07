import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCgUa4SFQ-ITC-DK91MsnzHAltg5FqaExE",
  authDomain: "reactcsit.firebaseapp.com",
  projectId: "reactcsit",
  storageBucket: "reactcsit.appspot.com",
  messagingSenderId: "893506065534",
  appId: "1:893506065534:web:07264fbaae8755edcd342f",
  measurementId: "G-VPC965CYNH",
};
export function initializeFirebase() {
  const app = initializeApp(firebaseConfig);
}
export function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const { user } = result;
      console.log(user);
      let userobj = {
        name: user?.displayName,
        email: user?.email,
        imageUrl: user?.photoURL,
        accessToken: user?.accessToken,
      };

      // This gives you a Google Access Token. You can use it to access the Google API.
      localStorage.setItem("user", JSON.stringify(userobj));
      // The signed-in user info.
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}
export const isloggedIn = () => {
  let userStr = localStorage.getItem("user");
  if (userStr) {
    return true;
  } else {
    return false;
  }
}
export const getUser =()=>{
    let userStr = localStorage.getItem('user')
    if(userStr){
        return 
    }
}
