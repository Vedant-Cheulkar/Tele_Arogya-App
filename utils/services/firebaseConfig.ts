// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { User } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAi7Nu6N6BUzQAsLIf4gZd9GTlQKOY0UPw",
  authDomain: "telemedicine-app-6bac1.firebaseapp.com",
  projectId: "telemedicine-app-6bac1",
  storageBucket: "telemedicine-app-6bac1.appspot.com",
  messagingSenderId: "69020274000",
  appId: "1:69020274000:android:c1992f1a8c022650e73055",
  measurementId: "G-XXXXXXX", // Optional for Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const firestore = getFirestore(app);

// Login Function
export const loginUser = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Return the authenticated user
  } catch (error) {
    let errorMessage = 'Unknown login error';

    if (error instanceof Error) {
      if (error.message.includes('auth/invalid-email')) {
        errorMessage = 'Invalid email format.';
      } else if (error.message.includes('auth/wrong-password')) {
        errorMessage = 'Incorrect password. Please try again.';
      } else if (error.message.includes('auth/user-not-found')) {
        errorMessage = 'No user found with this email address.';
      }
    }

    console.error('Login Error:', errorMessage);
    throw new Error(errorMessage);
  }
};

// Register Function
export const registerUser = async (
  email: string,
  password: string,
  name: string,
  gender: string,
  dob: Date,
  userType: 'patient' | 'doctor',
  doctorId?: string
): Promise<User> => {
  try {
    // Create user in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Prepare user data for Firestore
    const userData = {
      name,
      email,
      gender,
      dob: dob.toISOString(), // Convert Date to ISO string for Firestore
      userType,
      ...(userType === 'doctor' && { doctorId }), // Add doctorId only if userType is 'doctor'
    };

    // Save user data in Firestore
    await setDoc(doc(firestore, 'users', userCredential.user.uid), userData);

    return userCredential.user; // Return the registered user
  } catch (error) {
    let errorMessage = 'Unknown registration error';

    if (error instanceof Error) {
      if (error.message.includes('auth/email-already-in-use')) {
        errorMessage = 'This email is already registered.';
      } else if (error.message.includes('auth/weak-password')) {
        errorMessage = 'Password must be at least 6 characters long.';
      } else if (error.message.includes('auth/invalid-email')) {
        errorMessage = 'Invalid email format.';
      }
    }

    console.error('Registration Error:', errorMessage);
    throw new Error(errorMessage);
  }
};

export { auth, firestore }; // Export auth and firestore to be used in other files
