import { createSlice } from '@reduxjs/toolkit';

export interface Note {
    id: string,
    title: string,
    body: string,
    date: Date,
    imageUrls: string[]
}

export const journalSlice = createSlice({
    name: 'template',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
    },
    reducers: {
        savingNewNotes: (state: any) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state: any, { payload }: any) => {
            state.notes.push(payload);
            state.isSaving = false;
        },
        setActiveNote: (state: any, { payload }: any) => {
            state.active = payload;
        },
        setNotes: (state: any, action: any) => {

        },
        setSaving: (state: any, action: any) => {

        },
        updateNote: (state: any, action: any) => {
            
        },
        deleteNote: (state: any, action: any) => {

        }
    }
});


// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    deleteNote,
    savingNewNotes,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
 } = journalSlice.actions;