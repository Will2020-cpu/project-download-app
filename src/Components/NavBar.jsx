import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow:1,
  },

  search:{
    width:'auto',
    borderRadius:theme.shape.borderRadius,
    backgroundColor:fade(theme.palette.common.white,0.2),
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    position:'relative',
  },
  searchIcon:{
      color:'#000',
      fontSize:'0.2rem',
      backgroundColor:'#f5c518',
      borderBottomLeftRadius:'0px',
      borderTopLeftRadius:'0px',
      '&:hover':{
        backgroundColor:'#f5c518',
      }
  },
  inputRoot: {
    color: fade(theme.palette.common.white,0.90),
  },
  inputInput: {
    padding: theme.spacing(1, 1, 0.58, 0),
    // vertical padding + font size from searchIcon
    paddingLeft:'4px',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
    borderRadius:theme.shape.borderRadius,
    
    transition:'1s',
    '&:focus':{
        boxShadow:'inset 0 0 0 2px #f5c518',
        
    },
  },
  root:{
    height:theme.spacing(7),
    backgroundColor: '#121212',
  },
  appBar:{
      width:'100%',
      margin:'auto',
      minHeight:theme.spacing(7),
      justifyContent:'space-between',
  },
  botonS:{
    color:theme.palette.common.white,
    '&:hover':{
      color: '#f5c518',
    }, 
  },
  botonR:{
    color:theme.palette.common.white,
    border:'1.5px solid #f5c518',
    margin: '0 10px',
    '&:hover':{
      border:'1px solid #fff',
      color:'#f5c518',
    },
  },
  containerTitle:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  containerButton:{
    marginLeft:theme.spacing(8),
    display:'block',
    [theme.breakpoints.down('sm')]:{
      display:'none',
    }
  },
  containerButtonUsers:{
      [theme.breakpoints.down('xs')]:{
        display:'none',
      }
  },
  Buttons:{
    color:'#fff',
    textDecoration:'none',
    textTransform:'uppercase',
    fontSize:'0.9rem',
    fontWeight:'700',
    margin:'0 5px', 
    '&:hover':{
      color:'#f5c518',
    }
  },
  active:{
    color:'#f5c518',
  },
  IconButton:{
    display:'none',
    color:'#fff',
    [theme.breakpoints.down('sm')]:{
      display:'block',
    }
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  
  

    const renderSearch =(
      <InputBase
         placeholder="Buscar..."
        classes={{
            root:classes.inputRoot,
            input: classes.inputInput
        }}
      />
    )
  return (
    <div className={classes.grow}>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar className={classes.appBar}>
         <div className={classes.containerTitle}>
           <IconButton aria-label="search" className={classes.IconButton}>
              <MenuIcon/>
           </IconButton>
            <Typography variant="body2" color="initial" className={classes.title} noWrap>
              Test
            </Typography>
            <div className={classes.containerButton}>
                <NavLink to='/' className={classes.Buttons}>
                    Inicio
                </NavLink>
                <NavLink to='/pelicula' className={classes.Buttons} activeClassName={classes.active}>Peliculas</NavLink>
                <NavLink to='/series' className={classes.Buttons} activeClassName={classes.active}>Series</NavLink>

            </div>
         </div>
          <div className={classes.search}>
              
              {renderSearch}
              <Button className={classes.searchIcon} size="small">
                  <SearchIcon/>
              </Button>
          </div>
          <div className={classes.containerButtonUsers}>
              <NavLink to='/login' className={classes.Buttons}>
                  Iniciar sesion
              </NavLink>
              
              <Button variant="text" color="primary" className={classes.botonS}>
                  Registrarse
              </Button>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}



