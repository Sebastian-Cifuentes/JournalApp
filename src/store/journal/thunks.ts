import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNotes, setActiveNote } from ".";


export const startNewNote = () => {


    // const 

    return async(dispatch: any, getState: any) => {

        dispatch(savingNewNotes());

        const { uid } = await getState().auth;

        const newNote: any = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`));

        await setDoc( newDoc /**Referencia en donde se debe de guardar */ , newNote /** Objeto que se va a guardar */ );

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));

    }

}

