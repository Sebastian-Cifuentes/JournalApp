import { checkingCredentials, login, logout } from "."
import { signInWithGoogle, registerUserWithEmailAndPassword, loginUserWithEmailPassword, logoutFirebase } from "../../firebase/provider";

export const checkingAuth = () => {
    return async (dispatch: any) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch: any) => {
        try {
            dispatch(checkingCredentials());
            const result = await signInWithGoogle();    
            dispatch(login(result))
        } catch ({err, errorMessage}: any) {
            return dispatch(logout(errorMessage)); 
        }


    }
}

export const registerUser = ({email, password, displayName}: any) => {
    return async (dispatch: any) => {

        try {
            dispatch(checkingCredentials());
    
            const { uid, photoURL } = await registerUserWithEmailAndPassword({email, password, displayName});
    
            dispatch(login({uid, photoURL, displayName, email}))

        } catch({err, errorMessage}: any) {
            return dispatch(logout(errorMessage))
        }

    }
}

export const loginUserWithEmail = ({email, password}: any) => {
    return async(dispatch: any) => {
        try {

            dispatch(checkingCredentials());
            const { uid, photoURL, displayName } = await loginUserWithEmailPassword({email, password});
            dispatch(login({uid, photoURL, displayName, email}))

        } catch({err, errorMessage}: any) {
            return dispatch(logout(errorMessage))
        }
    }
}

export const startLogout = () => {
    return async(dispatch:any) => {
        try {

            await logoutFirebase();
            dispatch(logout(''))


        } catch ({err, errorMessage}: any) {
            return dispatch(logout(errorMessage))
        }
    }
}
