import { Button } from '@mui/material';
import React from 'react';
import appFirebase from '../firebase/config';
import {getAuth, signOut} from 'firebase/auth';

const auth = getAuth(appFirebase);


function HomeComponent({ mailUser }) {
    return (
        <div>
            <h2>Bienvenido: {mailUser} <Button onClick={() => signOut(auth)}>Cerrar sesion</Button></h2>
            <h3>datita</h3>
        </div>
    )
}

export default HomeComponent;