import { auth, db, } from "@/app/lib/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";

export const registerUser = async (
  email: string,
  password: string,
  name: string
) => {
  // Basic validation before calling Firebase
  if (!email || !password) {
    const err: any = new Error("Missing email or password");
    err.code = "auth/missing-credentials";
    throw err;
  }

  if (password.length < 6) {
    const err: any = new Error("Password should be at least 6 characters.");
    err.code = "auth/weak-password";
    throw err;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await setDoc(doc(db, "Users", user.uid), {
      name,
      email,
      createdAt: new Date(),
    });

    return user;
  } catch (error: any) {
    const firebaseError = error as FirebaseError;
    // Log detailed error to help debugging (visible in browser console)
    // eslint-disable-next-line no-console
    console.error("Firebase createUserWithEmailAndPassword error:", firebaseError.code, firebaseError.message, firebaseError);
    // Re-throw so caller can handle/display the message
    throw firebaseError;
  }
};

