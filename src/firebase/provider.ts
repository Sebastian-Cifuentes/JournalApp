import { GoogleAuthProvider, User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleAuthProvider = new GoogleAuthProvider();


export const signInWithGoogle = async() => {
    try {

        const result = await signInWithPopup(firebaseAuth, googleAuthProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);

        const { displayName, email, photoURL, uid } = result.user;

        return {displayName, email, photoURL, uid}

    } catch(err: any) {
        // const errorCode = err.code;
        // const errorMessage = err.message;

        throw {err, errorMessage: err.message};
    }
}

export const registerUserWithEmailAndPassword = async({email, password, displayName}: any) => {
    try {

        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        //TODO: actualizar el username en firebase

        await updateProfile(firebaseAuth.currentUser as User, {displayName});

        return { uid, photoURL, email, displayName }

    } catch(err: any) {
        throw {
            err, 
            errorMessage: err.message
        };
    }
}

export const loginUserWithEmailPassword = async({email, password}: any) => {
    try {

        const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password);
        const { uid, photoURL, displayName } = user;

        return { uid, photoURL, displayName };

    } catch(err: any) {
        throw {
            err,
            errorMessage: err.message
        }
    }
}

export const logoutFirebase = async() => {
    try {
        return await firebaseAuth.signOut();
    } catch(err: any) {
        throw {
            err,
            errorMessage: err.message
        }
    }
}

