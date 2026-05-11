import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
GoogleAuthProvider,
signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getFirestore,
doc,
setDoc,
getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig={
apiKey:"YOUR_KEY",
authDomain:"YOUR_DOMAIN",
projectId:"YOUR_PROJECT",
storageBucket:"YOUR_BUCKET",
messagingSenderId:"YOUR_ID",
appId:"YOUR_APP_ID"
};

const app=initializeApp(firebaseConfig);

const auth=getAuth(app);
const db=getFirestore(app);

const provider=new GoogleAuthProvider();

export async function login(){

const result=await signInWithPopup(auth,provider);

return result.user;

}

export async function saveProgress(uid,data){

await setDoc(doc(db,"players",uid),data);

}

export async function loadProgress(uid){

const snap=await getDoc(doc(db,"players",uid));

if(snap.exists()){
return snap.data();
}

return null;

}
