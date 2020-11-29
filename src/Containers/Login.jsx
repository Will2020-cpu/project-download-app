import React,{ Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    root:{
        width:'90%',
        margin:'0 auto',
        padding:'20px',
    }
}))


const Login = () => {
    const classes = useStyles()
    return (
        <Fragment>
           <div className={classes.root}>
            <Grid container spacing={3}>
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
