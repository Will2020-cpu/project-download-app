import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import styled from 'styled-components';
import {useParams} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles((theme)=>({
    root:{
        color:'#f5c518',
        padding:'20px 0',
        width:'90%',
        margin:'auto',
        borderRadius:theme.shape.borderRadius,
        maxWidth:'1300px'
    },
    containerCover:{
        padding:theme.spacing(2)
    },
    image:{
        objectFit:'cover',
        maxWidth:'200px',
        height:'auto',
        width:'100%'
    },
    containerText:{
        width:'60%',
        padding:'20px'
    }
}))

const Container = styled.div`
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.70)), url(${props => props.image});
    background-position: center center;
    background-size: cover;
    min-height: 22.62em;
    color:#fff;
    display:flex;
    align-items: flex-end;
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
                            <div className={classes.containerCover}>
                                <img src={item.cover} alt="cover" className={classes.image}/>
                            </div>
                            <div className={classes.containerText}>
                                <Typography variant="h4" color="initial">
                                    {item.nombre}
                                </Typography>
                                <p>
                                    {item.descripcion}
                                </p>
                            </div>
                        </Container>
                    ))
                }
            </div>
        </Fragment>
    )
}

const mapToStateToProps = state =>({
    movie : state.peliculas
})

export default connect(mapToStateToProps,null)(MovieInformation)
