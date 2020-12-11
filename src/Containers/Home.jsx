import React from 'react'
import Carousel from '../Components/Carousel/Carousel'
import {makeStyles} from '@material-ui/core/styles'
import Slider from '../Components/Slider'
import {Link} from 'react-router-dom'

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
    },
    links:{
        color:'#f5c518',
        textDecoration:'none',
        fontWeight:theme.typography.fontWeightRegular,
        fontSize:theme.typography.pxToRem(28),
        margin:'60px 0',
        '&:hover':{
            color:theme.palette.common.white,
        }
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
                    <Link to="/series" className={classes.links}>Series</Link>
                    <Slider/>
                </div>
                <div className={classes.section}>
                    <Link to='/peliculas' className={classes.links}>Peliculas</Link>
                    <Slider/>
                </div>
            </main>
        </div>
    )
}

export default Home
