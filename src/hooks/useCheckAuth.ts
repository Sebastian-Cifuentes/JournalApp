import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/auth';
import { firebaseAuth } from '../firebase/config';

export const useCheckAuth = () => {
  const { status } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    
    onAuthStateChanged(firebaseAuth, async(user) => {
      if (!user) return dispatch(logout(''));

      const {uid, email, displayName, photoURL} = user;

      dispatch(login({uid, email, displayName, photoURL}))
    });
  
  }, []);

  return {

    status

  }
}
