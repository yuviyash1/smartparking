// 1. Add your Firebase project's configuration
// Go to Firebase Console > Project Settings > General tab
// Scroll down to "Your apps" and click the Web icon (</>)
// Follow the steps and copy the config object here
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://your-project-name-default-rtdb.firebaseio.com", // From Step 1
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
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
