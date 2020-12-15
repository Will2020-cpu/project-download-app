import React,{ Fragment } from 'react';
import Paper from '@material-ui/core/Paper'
import {makeStyles,fade} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
    root:{
        width:'90%',
        margin:'auto',
        height:'90vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    paper:{
        margin:'auto',
        backgroundColor:'#121212',
        padding:theme.spacing(4),
        width:'400px',
    },
    form:{
        display:'flex',
        flexDirection:'column',
    },
    title:{
        color:'#fff',
    },
    containerInputs:{
        margin:'10px 0',
        display:'flex',
        flexDirection:'column'
    },
    label:{
        color:'#fff',
    },
    campos:{
        padding:theme.spacing(1),
        border:'0',
        color:'#fff',
        borderRadius:theme.shape.borderRadius,
        background:fade(theme.palette.common.white,0.2),
        transition:'0.5s',
        '&:focus':{
            outline:'none',
            boxShadow:'inset 0 0 0 2px #f5c518'
        }
    },
    button:{
        margin:'10px 0',
        backgroundColor:'#f5c518',
        padding:'5px',
        '&:hover':{
            backgroundColor:'#f5c518',
            boxShadow:'0 0 4px #f5c518, 0 0 35px #f5c518, 0 0 40px #f5c518'
        }
    },
    containerRegistrar:{
        margin:'10px',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    Link:{
        color:'#f5c518',
        fontSize:'0.875rem',
        textDecoration:'none',
        padding:'2px',
        marginTop:'4px'
    }
}))


const Login = () => {
    const classes = useStyles()
    return (
        <Fragment>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <form className={classes.form}>
                        <Typography variant="h5" className={classes.title}> Iniciar sesión</Typography>
                            <div className={classes.containerInputs}>
                                <label htmlFor="" className={classes.label}>username</label>
                                <input type="text" className={classes.campos}/>
                            </div>
                            <div className={classes.containerInputs}>
                                <label htmlFor="" className={classes.label}>password</label>
                                <input type="password" className={classes.campos}/>
                            </div>
                        
                        <Button className={classes.button}>Iniciar sesión</Button>
                    </form>
                    <div className={classes.containerRegistrar}>
                        <Typography variant="body2" className={classes.title}>
                            No tienes cuenta ? 
                        </Typography>
                        <Link to="/registrar" className={classes.Link}>Registrarse</Link>
                    </div>
                </Paper>
            </div>
        </Fragment>
    )
}

export default Login
