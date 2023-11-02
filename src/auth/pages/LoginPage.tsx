import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from "../../hooks";
import { Status, loginUserWithEmail, startGoogleSignIn } from "../../store/auth";
import { useMemo } from "react";

export const LoginPage = () => {

  const { password, email, onInputChange }: any = useForm({
    email: 'sebas@mail.com',
    password: '123456'
  });

  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector( (state: any) => state.auth );
  const isAuth = useMemo(() => status === Status.checking, [status]);


  const onSubmit = (event: any) => {
    event.preventDefault();
    dispatch(loginUserWithEmail({email, password}) as any);
  }
  
  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn() as any);
  }

  return (
    
    <AuthLayout title="Login">
      <form 
      className="animate__animated animate_fadeIn animate__faster"
      onSubmit={onSubmit}>

      <Grid container>
        <Grid item xs={12} sx={{mb: 2}}>
          <TextField 
            label="Correo" 
            type="email" 
            placeholder="test@test.com"
            name="email"
            value={email}
            onChange={onInputChange}
            fullWidth>
          </TextField>
        </Grid>
        <Grid item xs={12} sx={{mb: 1}}>
          <TextField 
            label="Contraseña" 
            type="password" 
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={onInputChange}
            fullWidth>
          </TextField>
        </Grid>

        <Grid container spacing={2} sx={{mb: 2}}>

          <Grid display={errorMessage ? '' : 'none'} item xs={12} sm={12}>
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button type="submit" variant="contained" fullWidth
                    disabled={isAuth}>
                      Login
                      </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button disabled={isAuth} onClick={onGoogleSignIn} variant="contained" fullWidth>
              <Google />
              <Typography sx={{ml:1}}>Google</Typography>
            </Button>
          </Grid>
          <Grid
            container
            direction='row'
            justifyContent='end'>
              <Link sx={{mt: 2}} component={ RouterLink } color='inherit' to='/auth/register'>
                Crear una cuenta
              </Link>
          </Grid>

        </Grid>

      </Grid>

      </form>
    </AuthLayout>

  )
}
