import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CardCover from '../Components/CardCover'

const useStyles = makeStyles((theme)=>({
    root:{
        width:'90%',
        margin:'0 auto'
    }
}))

const Cuadricula = ({movies}) => {
 const classes = useStyles()

    return (
        <Fragment>
            <Grid container spacing={2} className={classes.root}>
                {
                    movies.map((item)=>(
                        <Grid item xs={6} sm={4} lg={2}>
                            <CardCover nombre={item.nombre} img={item.cover}/>
                        </Grid>
                    ))
                }
            </Grid>
        </Fragment>
    )
}


const mapToStateToProps= state =>({
    movies: state.peliculas
})

export default connect(mapToStateToProps,null)(Cuadricula)
