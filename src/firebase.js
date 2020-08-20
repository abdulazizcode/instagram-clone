import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyAtkFhY4cm4f9dtpG4g-dMDyYlDlDF9SYQ",
      authDomain: "instagram-clone-6455e.firebaseapp.com",
      databaseURL: "https://instagram-clone-6455e.firebaseio.com",
      projectId: "instagram-clone-6455e",
      storageBucket: "instagram-clone-6455e.appspot.com",
      messagingSenderId: "506199694694",
      appId: "1:506199694694:web:6082d6a681b3bc3ac0bca7",
      measurementId: "G-XV9DEQ3B7B"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db,auth,storage};
