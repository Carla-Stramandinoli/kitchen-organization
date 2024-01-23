import React from 'react'
import { Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import appFirebase from '../firebase/config';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import Swal from 'sweetalert2';

const auth = getAuth(appFirebase);

function LoginContainer() {

    const defaultTheme = createTheme();

    const [record, setRecord] = React.useState(false);

    const funcAutentication =async(e) => {
        e.preventDefault();
        const mail = e.target.email.value;
        const password = e.target.password.value;

        if(record) {
            await createUserWithEmailAndPassword(auth, mail, password)
        } else {
            try {
                await signInWithEmailAndPassword(auth, mail, password)
            } catch(error) {
                Swal.fire("El correo o la contraseña son incorrectos!");
            }
        }
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                       {record ? "Registrate" : "Inicia sesion"}
                    </Typography>
                    <Box onSubmit={funcAutentication} component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                           {record ? "Registrate" : "Inicia sesion"}
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link onClick={() => setRecord(!record)} href="#" variant="body2">
                                {record ? "¿Ya tienes una cuenta? Inicia sesion" : "¿No tienes cuenta? Registrate"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default LoginContainer;