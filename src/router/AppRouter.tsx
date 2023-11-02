import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthRouter } from '../auth/routes/AuthRouter';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { Status } from '../store/auth';
import { CheckingAuth } from '../ui';
import { useCheckAuth } from '../hooks';

export const AppRouter = () => {

  const { status } = useCheckAuth();
  

  if (status === Status.checking) {
    return <CheckingAuth />
  }

  return (
    
    <Routes>

        {

          (status === Status.authenticated)
          ?  <Route path="/*" element={<JournalRoutes />} />
          : <Route path='/auth/*' element={<AuthRouter />} />

        }

        {/* Cualquier otra ruta que no exista en lo anterior */}
        <Route path="/*" element={ <Navigate to={'/auth/login'} /> } />

        {/* Auth */}
        {/* <Route path='/auth/*' element={
            <AuthRouter />
        } /> */}

        {/* JournalApp */}
        {/* <Route path="*" element={
            <JournalRoutes />
        } /> */}

    </Routes>

  )
}
