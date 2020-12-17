import { 
        Drawer,
        IconButton,
        List,
        ListItem,
        ListSubheader,
        ListItemIcon ,
        ListItemText

} from '@material-ui/core';
import React, { Fragment, useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles';
import MovieIcon from '@material-ui/icons/Movie';

const useStyles = makeStyles((theme)=>({
    content:{
        width:250,
        height:'100vh',
        backgroundColor:'#121212',
        color:'#fff',
    },
    subheader:{
        color:'#e0e0e0'
    },
    icon:{
        color:'#fff'
    }
}))


const DrawerSidebar = () => {
    const [open,setOpen] = useState(false);
    const classes = useStyles();
    const handleClickOpen = () =>{
        setOpen(!open);
    }
    return (
        <Fragment>
            <IconButton onClick={handleClickOpen} className={classes.icon}><MenuIcon/></IconButton>
            <Drawer anchor="left" open={open} onClose={handleClickOpen}>
                <div className={classes.content}>
                    <List 
                      component="nav"
                      aria-labelledby = "nested-list-subheader"
                      subheader ={
                          <ListSubheader className={classes.subheader}>
                              Navegacion
                          </ListSubheader>
                      }
                      className={classes.root}
                    >
                        <ListItem button>
                            <ListItemIcon><MovieIcon className={classes.icon}/></ListItemIcon>
                            <ListItemText primary="Peliculas"/>
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon><MovieIcon className={classes.icon}/></ListItemIcon>
                            <ListItemText primary="Series"/>
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon><MovieIcon className={classes.icon}/></ListItemIcon>
                            <ListItemText primary="Anime"/>
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon><MovieIcon className={classes.icon}/></ListItemIcon>
                            <ListItemText primary="Ano"/>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </Fragment>
    )
}

export default DrawerSidebar
