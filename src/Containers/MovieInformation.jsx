import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import styled from 'styled-components';
import {useParams} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import StarIcon from '@material-ui/icons/Star';
import Tabla from '../Components/Tabla'
import { Grid, Paper } from '@material-ui/core';
import TabCo from '../Components/TabCo'

const useStyles = makeStyles((theme)=>({
    root:{
        color:'#f5c518',
        padding:'20px 0',
        width:'90%',
        margin:'auto',
        borderRadius:theme.shape.borderRadius,
    },
    container:{
        display:'flex',
        justifyContent:'space-around',
        alignItems:'flex-end',
        margin:'0 auto',
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column',
        }
    },
    containerCover:{
        padding:theme.spacing(2),
        width:'600px',
        height:'auto',
    },
    image:{
        display:'block',
        height:'auto',  
        width:'600px',
        maxWidth:'200px',
        borderRadius:theme.shape.borderRadius,
        [theme.breakpoints.down('sm')]:{
            width:'100%'
        }
    },
    containerText:{
        padding:'20px',
    },
    containerDescripcion:{
      padding:'20px 0'
    },
    p:{
        textAlign:'justify',
        width:'90%',
        padding:'10px 0'
    },
    puntuacion:{
        display:'flex',
        alignItems:'center'
    },
    number:{
        fontSize:'1.2rem',
    },
    span:{
        color:'#f5c518'
    },
    Title:{
        padding:'30px 0',
        color:'#f5c518'
    },
    containerTable:{
        width:'90%',
        margin:'0 auto'
    },
    Paper:{
      backgroundColor:'#121212',
      borderRadius:theme.shape.bordeRadius,
      padding:'20px',
      marginBottom:'10px'
    },
    titleco:{
        color:'#f5c518',
        fontSize:'1rem',
        listStyle:'underline'
    }
   
}))

const Container = styled.div`
    background-image: linear-gradient(to right, rgba(16.08%, 17.25%, 18.43%, 1.00) 150px, rgba(24.31%, 24.31%, 24.31%, 0.84) 100%), url(${props => props.image});
    background-position: center center;
    background-size: cover;
    min-height: 22.62em;
    color:#fff;
    display:flex;
    justify-content:center;
    flex-wrap:'wrap';
    border-radius: 5px;
`

const MovieInformation = ({movie}) => {
   const classes = useStyles()
   let {peliculaID} = useParams()
   const arraySeleccionado = movie.filter(pelicula => pelicula.ruta=== peliculaID.trimStart())
    return (
        <Fragment>
            <div className={classes.root}>
                {
                    arraySeleccionado.map(item =>(
                        <Container image={item.imgUrl} key={item.id}>
                            <div className={classes.container}>
                                <div className={classes.containerCover}>
                                    <img src={item.cover} alt="cover" className={classes.image}/>
                                </div>
                                <div className={classes.containerText}>
                                   <div className={classes.Title}>
                                        <Typography variant="h4" color="initial">
                                            {item.nombre} (2020)
                                        </Typography>
                                        
                                        <span>Suspenso, Terror, Accion</span>
                                   </div>
                                    <div className={classes.containerPuntuacion}>
                                        <div className={classes.puntuacion}>
                                            <span className={classes.span}><StarIcon/></span> <p className={classes.number}>9.5/10</p>

                                        </div>
                                    </div>
                                    <div className={classes.containerDescripcion}>
                                        <Typography variant="h5">
                                            Descripcion
                                        </Typography>
                                        <p className={classes.p}>
                                            {item.descripcion}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    ))
                }
            </div>
            <div className={classes.containerTable}>
               <Grid container spacing={2}>
                    <Grid item xs={12} lg={9}>
                        <Paper className={classes.Paper}>
                            <Typography variant="h4" className={classes.Title} color="initial">Descargas</Typography>
                            <Tabla idioma="Espanol latino" formato=".mp4" size="1.20GB" servidor="Mega"/>
                        </Paper>
                      
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Paper className={classes.Paper}>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={9}>
                        <TabCo/>
                    </Grid>
               </Grid>
            </div>
        </Fragment>
    )
}

const mapToStateToProps = state =>({
    movie : state.peliculas
})

export default connect(mapToStateToProps,null)(MovieInformation)
