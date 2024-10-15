// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBs5dilMDHrWjDZXE-y4l7hW6JtdlQEI_8",
    authDomain: "gym-management-system-e340c.firebaseapp.com",
    projectId: "gym-management-system-e340c",
    storageBucket: "gym-management-system-e340c.appspot.com",
    messagingSenderId: "1000657710027",
    appId: "1:1000657710027:web:a70b0e5d8125d735c9a44e",
    measurementId: "G-6BVHWQ6183"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  //get ref to database services
  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click', function (e) {

    set(ref(db, 'user/' + document.getElementById("uname").value),
    {

      username: document.getElementById("uname").value,
      email: document.getElementById("emaile").value,
      PhoneNumber: document.getElementById("phone").value,
      Address: document.getElementById("address").value

    });
    alert("Login successfull ✌ ")
    
  })


// Get elements
const joinNowBtn = document.getElementById('joinNowBtn');
const joinFormPopup = document.getElementById('joinFormPopup');
const closeForm = document.getElementById('closeForm');

// Open the form when "Join Now" is clicked
joinNowBtn.addEventListener('click', () => {
    joinFormPopup.style.display = 'block';
});

// Close the form when the close button is clicked
closeForm.addEventListener('click', () => {
    joinFormPopup.style.display = 'none';
});

// Close the form when clicking outside of the form container
window.addEventListener('click', (event) => {
    if (event.target === joinFormPopup) {
        joinFormPopup.style.display = 'none';
    }
});
