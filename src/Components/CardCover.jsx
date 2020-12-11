import React,{Fragment, useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import StarIcon from '@material-ui/icons/Star';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) =>({
    root:{
        maxWidth: 180,
        backgroundColor:'#1A1A1A',
        height: 320,
        borderRadius:'4px',
        overflow:'hidden',
        transition:'2s',
        '&:hover':{
            '& $image':{
                boxShadow:'inset 0 0 0 2px #f5c518',
                border:'2px solid #f5c518',
            },
            cursor: 'pointer'
        },
        [theme.breakpoints.down('xs')]:{
            maxWidth:150,
            height:300
        },
        
    },
    media:{
        height:'auto',
        width:'auto',
        
    },
    image:{
        width:'100%',
        maxWidth:200,
        height:'auto',
    },
    ContainerTitle:{
        backgroundColor:'#1A1A1A',
        display:'flex',
    },
    title:{
        color:'#fff',
        fontSize:'0.9rem'
    },
    span:{
        color:'#fff',
        fontSize:'0.9rem',
        display:'flex',
    },
    icon:{
        color:'gold',
        fontSize:'1rem'
    }
}))
const CardCover = ({img,nombre,Movies}) => {
    const classes = useStyles()
    const [click,setClick] = useState(false)
    const [cover,setCover] = useState('');
    const handleClickCover = (cover) =>{
        let arraySeleccionado = Movies.filter(pelicula => pelicula.nombre === cover) 
        arraySeleccionado.map(item=>(
            setCover(item.ruta)
        ))
        setClick(true);
    }

    return (
        <Fragment>
            <div className={classes.root} onClick={() => handleClickCover(nombre)}>
                <div className={classes.media}>
                    <img src={img} alt="cover" className={classes.image}/>
                </div>
                {click ? <Redirect to={`/pelicula/${cover}`}/> : null}
                <div className={classes.Containertitle}>
                    <div className={classes.span}><StarIcon className={classes.icon}/> 9.5</div>
                    <Typography variant="body1" color="initial" className={classes.title}>
                        {nombre}
                    </Typography>
                </div>
            </div>
         
        </Fragment>
    )
}


const mapStateToProps = state =>({
    Movies: state.peliculas
})




export default connect(mapStateToProps,null)(CardCover)
