import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Status, registerUser } from "../../store/auth";

const formData = {
  email: 'sebas@mail.com',
  password: '123456',
  displayName: 'Sebastian Cifuentes',
};

const formValidations = {
  email: [(value: any) => value.includes('@'), 'Email not valid'],
  password: [(value: any) => value.length >= 6, 'Password not valid'],
  displayName: [(value: any) => value.length >= 1, 'Name not valid'],
};

export const RegisterPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false);
  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector((state: any) => state.auth);

  const isCheckingAuth = useMemo(() => status === Status.checking, [status]);

  const { displayName, password, email, onInputChange,
          isFormValid, displayNameValid, passwordValid, emailValid
  }: any = useForm(formData, formValidations);

  const onSubmit = (event: any) => {
    event?.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(registerUser({email, password, displayName}) as any);
  }


  return (
    
    <AuthLayout title="Crear cuenta">
      <form
      className="animate__animated animate_fadeIn animate__faster"
      onSubmit={onSubmit}>

      <Grid container>
        <Grid item xs={12} sx={{mb: 2}}>
          <TextField 
            label="Nombre completo" 
            type="text" 
            placeholder="Tu nombre"
            name="displayName"
            value={displayName}
            onChange={onInputChange}
            error={displayNameValid && formSubmitted}
            helperText={formSubmitted && displayNameValid}
            fullWidth>
          </TextField>
        </Grid>
        <Grid item xs={12} sx={{mb: 2}}>
          <TextField 
            label="Correo" 
            type="email" 
            placeholder="test@test.com"
            name="email"
            value={email}
            error={emailValid && formSubmitted}
            helperText={formSubmitted && emailValid}
            onChange={onInputChange}
            fullWidth>
          </TextField>
        </Grid>
        <Grid item xs={12} sx={{mb: 2}}>
          <TextField 
            label="Contraseña" 
            type="password" 
            placeholder="Contraseña"
            name="password"
            value={password}
            error={passwordValid && formSubmitted}
            helperText={formSubmitted && passwordValid}
            onChange={onInputChange}
            fullWidth>
          </TextField>
        </Grid>

        <Grid container spacing={2} sx={{mb: 2}}>
          
          <Grid display={errorMessage ? '' : 'none'} item xs={12} sm={12}>
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Button disabled={isCheckingAuth} type="submit" variant="contained" fullWidth>
              Crear cuenta
            </Button>
          </Grid>
          <Grid
            container
            direction='row'
            justifyContent='end'>
              <Typography sx={{mr: 1}}>¿Ya tienes una cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to='/auth'>
                Ingresar
              </Link>
          </Grid>

        </Grid>

      </Grid>

      </form>
    </AuthLayout>

  )
}
