import { createSlice } from '@reduxjs/toolkit';

export enum Status {
    checking = 'checking',
    notauthenticated = 'not-authenticated',
    authenticated = 'authenticated',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: Status.checking, // 'checking', 'not-authenticated', 'authenticated
        uid: null,
        email: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null
    },
    reducers: {
        login: (state, {payload}) => {
            state.status = Status.authenticated,
            state.displayName = payload.displayName,
            state.email = payload.email,
            state.photoUrl = payload.photoUrl,
            state.uid = payload.uid,
            state.errorMessage = null
        },
        logout: (state, {payload}) => {
            state.status = Status.notauthenticated,
            state.displayName = null,
            state.email = null,
            state.photoUrl = null,
            state.uid = null
            state.errorMessage = payload
        },
        checkingCredentials: (state) => {
            state.status = Status.checking
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;