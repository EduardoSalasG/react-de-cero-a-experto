import { Link as RouterLink } from "react-router-dom";
import { Grid, TextField, Typography, Button, Link } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
    return (

        <AuthLayout title="Register">

            <form>

                <Grid container>

                    <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder="Nombre completo"
                            fullWidth />
                    </Grid>

                    <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth />
                    </Grid>

                    <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth />
                    </Grid>

                    <Grid container justifyContent="center"
                        sx={{ mb: 2, mt: 1, width: '100%' }} >

                        <Grid size={{ xs: 12 }}>
                            <Button variant='contained' fullWidth>
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
