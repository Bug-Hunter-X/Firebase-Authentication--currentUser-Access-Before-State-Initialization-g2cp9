# Firebase Authentication currentUser Access Before State Initialization

This repository demonstrates a common error in Firebase Authentication where attempting to access the `currentUser` property before the authentication state is fully initialized can cause unexpected behavior.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

**Problem:**
Accessing `firebase.auth().currentUser` immediately after app initialization can return `null` before the authentication state has been fully determined. This may lead to null pointer exceptions or unexpected behavior, particularly if the code relies on the `currentUser` data for critical functions.

**Solution:**
Utilize the `onAuthStateChanged` listener to ensure that the authentication state is properly initialized before accessing the `currentUser` property. This listener handles the asynchronous nature of Firebase Authentication, guaranteeing access to the correct data once the state has been resolved.