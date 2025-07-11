import { Link as RouterLink } from "react-router-dom";
import { Grid, TextField, Typography, Button, Link, Alert } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from '../../hooks'
import { useState, useMemo } from "react";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formData = {
    email: 'fernando@google.com',
    password: '123456',
    displayName: 'Fernando Herrera'
}

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe tener un @'],
    password: [(value) => value.length >= 6, 'El password debe tener más de 6 letras'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();

    const [formSubmitted, setFormSubmitted] = useState(false)

    const { status, errorMessage } = useSelector(state => state.auth);
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status])


    const { formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm(formData, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid) return;

        dispatch(startCreatingUserWithEmailPassword(formState));
    }

    return (

        <AuthLayout title="Register">
            <h1>FormValid {isFormValid ? 'Válido' : 'Incorrecto'}</h1>

            <form
                className='animate__animated animate__fadeIn animate__faster'
                onSubmit={onSubmit}>

                <Grid container>

                    <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder="Nombre completo"
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}


                        />
                    </Grid>

                    <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}

                        />
                    </Grid>

                    <Grid container justifyContent="center"
                        sx={{ mb: 2, mt: 1, width: '100%' }} >

                        <Grid
                            size={{ xs: 12 }}
                            display={!!errorMessage ? '' : 'none'}
                        >
                            <Alert severity="error">
                                {errorMessage}
                            </Alert>
                        </Grid>


                        <Grid size={{ xs: 12 }}>
                            <Button
                                disabled={isCheckingAuthentication}
                                variant='contained'
                                fullWidth
                                type="submit"
                            >
                                Crear cuenta
                            </Button>
                        </Grid>

                    </Grid>

                </Grid>


            </form>

            <Grid container direction='row' justifyContent='end'>
                <Typography sx={{ mr: 1 }} >¿Ya tienes cuenta?</Typography>
                <Link
                    component={RouterLink}
                    color='inherit'
                    to="/auth/login"
                >
                    Ingresar
                </Link>
            </Grid>

        </AuthLayout>

    )
}
