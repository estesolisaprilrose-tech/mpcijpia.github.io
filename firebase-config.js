<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDKzvb4g_aSHdMWo6FS1rIp5KrQKeRAysE",
    authDomain: "jpia-mpci-study-hub.firebaseapp.com",
    projectId: "jpia-mpci-study-hub",
    storageBucket: "jpia-mpci-study-hub.firebasestorage.app",
    messagingSenderId: "542629331066",
    appId: "1:542629331066:web:1acf5f902c8ab06a767bc3",
    measurementId: "G-WEBDXGR8D9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
