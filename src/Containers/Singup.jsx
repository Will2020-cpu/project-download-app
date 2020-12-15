import React, { useState } from 'react';
import { Fragment } from 'react';
import {makeStyles,withStyles,fade} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Checkbox, Typography, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
    root:{
        margin:'auto',
        width:'100%',
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    Paper:{
        backgroundColor: '#121212',
        width:'400px',
        margin:'auto',
        padding:theme.spacing(4),
    },
    title:{
        color:'#fff',
        textAlign:'center'
    },
    form:{
        color:'#fff',
    },
    inputs:{
        display:'flex',
        flexDirection:'column',
        margin:'10px',
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
    checked:{
        margin:'0 10px',
        display:'flex',
        justifyContent:'justify-beetwen',
        alignItems:'center'
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
    account:{
        display:'flex',
        margin:'0 10px',
        justifyContent:'flex-end',
        alignItems:'center',
        color:'#fff',
    },
    login:{
        textDecoration:'none',
        color:'#f5c518',
        marginLeft:'10px'
    }
}))

const CustomCheckbox = withStyles({
  root: {
    color:'#f5c518',
    '&$checked': {
      color:'#f5c518',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Singup = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(true);
    const handleOnChange=(event)=>{
        setChecked(event.target.checked)
    }
    return (
        <Fragment>
            <div className={classes.root}>
                <Paper className={classes.Paper}>
                    <Typography variant="h5" className={classes.title}>Registrate</Typography>
                    <form action="" className={classes.form}>
                        <div className={classes.inputs}>
                            <label htmlFor="" className={classes.label}>Nombre</label>
                            <input type="text" className={classes.campos}/>
                        </div>
                        <div className={classes.inputs}>
                            <label htmlFor="" className={classes.label}>Email</label>
                            <input type="text" className={classes.campos}/>
                        </div>
                        <div className={classes.inputs}>
                            <label htmlFor="" className={classes.label}>Password</label>
                            <input type="password" className={classes.campos}/>
                        </div>
                        <div className={classes.inputs}>
                            <label htmlFor="" className={classes.label}>Repite password</label>
                            <input type="password" className={classes.campos}/>
                        </div>
                        <div className={classes.checked}>
                            <p>Acepta los terminos y condiciones</p>
                            <CustomCheckbox checked={checked} onChange={handleOnChange} className={classes.checkbox}/>
                        </div>
                        <div className={classes.inputs}>
                            <Button className={classes.button}>Registrarse</Button>
                        </div>
                    </form>
                    <div className={classes.account}>
                        <p>Ya tienes cuenta ?</p>
                        <Link to="/login" className={classes.login}>Inicia sesion</Link>
                    </div>     
                </Paper>
            </div>            
        </Fragment>
    )
}

export default Singup
