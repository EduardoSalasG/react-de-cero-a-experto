import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from "react-router-dom";
import { Grid, TextField, Typography, Button, Link, Alert } from "@mui/material"
import { Google } from "@mui/icons-material";

import { AuthLayout } from "../layout/AuthLayout";

import { useForm } from '../../hooks'
import { startLoginWithEmailPassword, startGoogleSignIn } from '../../store/auth';
import { useMemo } from 'react';

export const LoginPage = () => {

    const dispatch = useDispatch()

    const { status, errorMessage } = useSelector(state => state.auth);

    const { email, password, onInputChange, formState } = useForm({
        email: 'fernando@google.com',
        password: '123456'
    });

    const isAuthenticating = useMemo(() => status === 'checking', [status])

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log({ email, password })

        dispatch(startLoginWithEmailPassword(formState))
    }

    const onGoogleSignIn = () => {
        console.log('onGoogleSignIn')
        dispatch(startGoogleSignIn())
    }

    return (

        <AuthLayout title="Login">

            <form
                className='animate__animated animate__fadeIn animate__faster'
                onSubmit={onSubmit}>

                <Grid container>

                    <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
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

                        />
                    </Grid>

                    <Grid
                        container
                        spacing={2}
                        sx={{ mb: 2, mt: 1, width: '100%' }}

                    >

                        <Grid
                            display={!!errorMessage ? '' : 'none'}
                            size={{ xs: 12 }}
                            sx={{ mt: 1 }}
                        >
                            <Alert severity="error">
                                {errorMessage}
                            </Alert>
                        </Grid>


                        <Grid size={{ sm: 12, md: 6 }}>
                            <Button
                                disabled={isAuthenticating}
                                type="submit"
                                variant='contained'
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>

                        <Grid size={{ sm: 12, md: 6 }}>
                            <Button
                                disabled={isAuthenticating}
                                onClick={onGoogleSignIn}
                                variant='contained'
                                fullWidth>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>


            </form>

            <Grid container direction='row' justifyContent='end'>
                <Link
                    component={RouterLink}
                    color='inherit'
                    to="/auth/register"
                >
                    Crear una cuenta
                </Link>
            </Grid>

        </AuthLayout>

    )
}
