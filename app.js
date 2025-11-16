// 1. Add your Firebase project's configuration
// Go to Firebase Console > Project Settings > General tab
// Scroll down to "Your apps" and click the Web icon (</>)
// Follow the steps and copy the config object here
const firebaseConfig = {
  apiKey: "AIzaSyD2HQfc1ZCBnxYxy7dhEMvpZpv__dE3ucg",
  authDomain: "smart-parking-5f9a2.firebaseapp.com",
  databaseURL: "https://smart-parking-5f9a2-default-rtdb.firebaseio.com",
  projectId: "smart-parking-5f9a2",
  storageBucket: "smart-parking-5f9a2.firebasestorage.app",
  messagingSenderId: "618928851378",
  appId: "1:618928851378:web:a85691d3f0f6a0f11bbcab",
  measurementId: "G-2SEYB76K1R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database
const database = firebase.database();

// Get a reference to the HTML elements
const spot1Element = document.getElementById('spot_1');

// Attach a real-time listener to the "spot_1" node in your database
database.ref('/parking/spot_1').on('value', (snapshot) => {
  const status = snapshot.val(); // This will be "occupied" or "vacant"
  console.log("New status from Firebase:", status);

  // Update the website's CSS classes
  if (status === "occupied") {
    spot1Element.classList.remove('vacant');
    spot1Element.classList.add('occupied');
  } else {
    spot1Element.classList.remove('occupied');
    spot1Element.classList.add('vacant');
  }
});
