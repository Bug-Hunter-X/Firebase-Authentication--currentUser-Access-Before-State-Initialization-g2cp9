function checkAuthState(){  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is signed in.
      console.log('User is signed in:', user);
      // Access user data here
    } else {
      // No user is signed in.
      console.log('No user is signed in');
      // Handle accordingly
    }
  });
}

// Initialize the firebase app and then check the authentication state
firebase.initializeApp(firebaseConfig);
checkAuthState();