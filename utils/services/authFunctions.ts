// authFunctions.ts
import { auth, firestore } from '@/services/firebaseConfig';  // Importing from updated firebaseConfig
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { User } from 'firebase/auth';
import { getAuth, signOut } from 'firebase/auth';


export const logoutUser = async (): Promise<void> => {
    try {
      await signOut(auth);  // Use the imported auth instance to sign out
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Logout Error:', error.message);  // Safely access error.message
        throw new Error('Failed to logout');
      } else {
        console.error('Unknown error during logout');
        throw new Error('Failed to logout due to an unknown error');
      }
    }
  };

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

export const registerUser = async (email: string, password: string, name: string): Promise<User> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(firestore, 'users', userCredential.user.uid), { name, email });
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
