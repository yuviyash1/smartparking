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
const database = firebase.database();

// Get references to all elements
const vacantCountEl = document.getElementById('vacant-count');
const gateStatusEl = document.getElementById('gate-status');
const spot1El = document.getElementById('spot_1');
const spot2El = document.getElementById('spot_2');
const spot3El = document.getElementById('spot_3');
const spot4El = document.getElementById('spot_4');

/**
 * A helper function to update an element's text and class.
 * @param {HTMLElement} element - The DOM element to update.
 * @param {string} status - The new status (e.g., "vacant", "occupied", "open", "closed").
 */
function updateElementClass(element, status) {
  if (!element) return; // Guard against missing elements
  
  // Remove old classes
  element.classList.remove('vacant', 'occupied', 'open', 'closed');
  
  // Add new class
  if (status) {
    element.classList.add(status);
  }
}

// Attach a real-time listener to the entire "parking" node
database.ref('/parking').on('value', (snapshot) => {
  const data = snapshot.val();
  
  if (data) {
    console.log("Received data:", data);

    // Update vacant spots count
    vacantCountEl.innerText = data.vacant_spots;
    
    // Update gate status text and class
    gateStatusEl.innerText = data.gate_status.toUpperCase();
    updateElementClass(gateStatusEl, data.gate_status);
    
    // Update all 4 parking spots
    updateElementClass(spot1El, data.spot_1);
    updateElementClass(spot2El, data.spot_2);
    updateElementClass(spot3El, data.spot_3);
    updateElementClass(spot4El, data.spot_4);

  } else {
    console.log("No data available.");
  }
});
