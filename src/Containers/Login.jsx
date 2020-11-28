import React,{ Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'

const Login = () => {
    return (
        <Fragment>
           <div>
            <Grid container>
                <Grid item lg={5}>
                        <Paper>Ingresa y accede con tus amigos</Paper>
                </Grid>
                <Grid item lg={7}>
                    <Paper>Formulario</Paper>
                </Grid>
            </Grid>
           </div>
        </Fragment>
    )
}

export default Login
