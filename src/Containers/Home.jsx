import React from 'react'
import Carousel from '../Components/Carousel/Carousel'
import NavBar from '../Components/NavBar'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '../Components/Slider'


const useStyles = makeStyles((theme) => ({
    root:{
        padding:'20px',
        margin:'0 auto',
        width:'80%',
        [theme.breakpoints.down('xl')]:{
            width:'90%',
            margin:'auto'
        },
        [theme.breakpoints.down('xs')]:{
            margin:0,
            width:'100%'
        }
    },
    carousel:{
        cursor:'pointer',
        marginBottom: '30px'
    },
    inputRoot:{
        backgroundColor:'#fff'
    },
    section:{
        color: '#f5c518',
        margin:'20px 0'
    }
}))

const Home = () => {
    const classes = useStyles()
    return (
        <div className="container">
            <main className={classes.root}>
                <div className={classes.carousel}>
                    <Carousel/>
                </div>
                <div className={classes.section}>
                    <Typography variant="h4" color="initial" className={classes.section}>Mas Descargados</Typography>
                    <Slider/>
                </div>
                <div className={classes.section}>
                    <Typography variant="h4" color="initial" className={classes.section}>Top Peliculas</Typography>
                    <Slider/>
                </div>
            </main>
        </div>
    )
}

export default Home
