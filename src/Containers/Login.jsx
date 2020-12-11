import React,{ Fragment } from 'react';
import Paper from '@material-ui/core/Paper'
import {makeStyles,fade} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme)=>({
    root:{
        width:'90%',
        margin:'auto',
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
    campos:{
        margin:'10px',
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
        backgroundColor:'#f5c518',
        padding:'5px',
        margin:'10px',
        '&:hover':{
            backgroundColor:'#f5c518',
            boxShadow:'0 0 4px #f5c518, 0 0 35px #f5c518, 0 0 40px #f5c518'
        }
    }
}))


const Login = () => {
    const classes = useStyles()
    return (
        <Fragment>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <form className={classes.form}>
                        <input type="text" placeholder="Username" className={classes.campos}/>
                        <input type="password" placeholder="password" className={classes.campos}/>
                        <Button className={classes.button}>Iniciar sesión</Button>
                    </form>
                </Paper>
            </div>
        </Fragment>
    )
}

export default Login
