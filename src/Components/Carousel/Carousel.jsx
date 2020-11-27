import React, { Fragment} from 'react'
import Button from '@material-ui/core/Button'
import Styled from 'styled-components'
import {makeStyles} from '@material-ui/core/styles';
import cx from 'clsx';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ArrowButtonStyles from './ButtonStyles'
import Typography from '@material-ui/core/Typography'
import AliceCarousel from 'react-alice-carousel'
// Array
const Data = [
   {
     id:1,
     text:"Volver al Futuro",
     image:"https://image.tmdb.org/t/p/original/6eoqf9NYisCfEROlkGJdMLHMQS6.jpg",
     cover: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/drUbeOWuKYarYpD5E0lGnc6lfqf.jpg"
   },
   {
     id:2,
     text: "DeadPool",
     image: "https://image.tmdb.org/t/p/original/k2VX0gFu2BEJhvduQTq2ioYp8z7.jpg",
     cover:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/pcZT1Ouq99dY6J2iGXjMxw16x6o.jpg"
   },
   {
     id:3,
     text: "Guardianes de la Galaxia",
     image: "https://image.tmdb.org/t/p/original/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
     cover:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/kdg6Y06jfq9FV7qknWNcKLYtBJn.jpg"
   }
]

const useStyles = makeStyles((theme)=>({
  root:{
    width :'100%',
    margin: ' auto',
    position:'relative',
    borderRadius: '5px',
    maxWidth:'1300px',
    [theme.breakpoints.down('xs')]:{
      width:'100%',
      maxWidth:'100vh',
      
    },
    [theme.breakpoints.down('xl')]:{
        width:'100%',
        maxWidth:'1800px',
    },
    [theme.breakpoints.down('lg')]:{
      maxWidth:'1280px',
      width:'100%'
    },
    '&:hover':{
        '& $arrow':{
            display:'inline-flex',
        },
        '& $title':{
          color:' #f5c518'
        }
    }
  },
  imageContainer:{
    position:'relative',
    [theme.breakpoints.down('xs')]:{
      maxWidth:'100px',
    }
  },
  image: {
    objectFit:'cover',
    width:'100%',
    maxWidth:'150px',
    height:'auto',
  },
  arrow: {
    display: 'none',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  arrowRight: {
    right: 0,
    [theme.breakpoints.up('lg')]: {
      right: 20,
    },
  },
  arrowLeft: {
    left: 0,
    [theme.breakpoints.up('lg')]: {
      left: 20,
    },
  },
  mobile:{
    padding:theme.spacing(2),
    width: '100%',
    margin: 'auto',
    maxWidth:'1300px',
    [theme.breakpoints.down('xl')]:{
      width:'100%',
      maxWidth:'1800px',
      height:'40em',
    },
    [theme.breakpoints.down('xs')]:{
      width:'100%',
      height: '0em',
      padding:0,
    },
    [theme.breakpoints.down('lg')]:{
      width:'100%',
      maxWidth:1300,
      height:'20em',
    },
  },
  p:{
    [theme.breakpoints.down('xs')]:{
      display:'none'
    }
  },
  title:{
    [theme.breakpoints.down('xs')]:{
      fontSize:'1em',
    }
  },
  textContainer:{
    width:'60%',
    padding:'20px',
    [theme.breakpoints.down('xs')]:{
      padding:0,
    }
  },
}))





const Container = Styled.div`
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.70)), url(${props => props.image});
    background-position: center center;
    background-size: cover;
    min-height: 22.62em;
    color:#fff;
    display:flex;
    align-items: flex-end;
    border-radius: 5px;
`


const Carousel = () => {
 
 
  const classes = useStyles();
  const ArrowStyles = ArrowButtonStyles();
  const items = Data.map((item)=>{
    return(
      <Container key={item.image} image={item.image} className={classes.mobile}>
          <div className={classes.imageContainer}>
            <img src={item.cover} alt="imagen" className={classes.image}/>
          </div>
        <div className={classes.textContainer}>
        <Typography variant="h4" color="initial" className={classes.title}>{item.text}</Typography>
          <p className={classes.p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia unde vel asperiores minus magni deleniti iste delectus accusantium aut quidem, incidunt dolorum esse autem deserunt sapiente quaerat, illum iure officia.
          </p>
        </div>
    </Container>
    )
  })

  const renderPrev = ({isDisabled}) =>{
    return(
      <Button classes={ArrowStyles} className={cx(classes.arrow,classes.arrowLeft)} style={{visibility:isDisabled ? 'hidden' :'visible'}}>
        <KeyboardArrowLeft/>
      </Button>
    )
  }

  const renderNext = ({isDisabled}) =>{
    return(
      <Button classes={ArrowStyles} className={cx(classes.arrow,classes.arrowRight)} style={{visibility:isDisabled ? 'hidden' :'visible'}}>
        <KeyboardArrowRight/>
      </Button>
    )
  }
  
  return (
    <Fragment>
      <div className={classes.root}>
          <AliceCarousel
            autoPlay
            mouseTracking
            autoPlayInterval={5000}
            animationDuration={1000}
            disableDotsControls
            renderNextButton={renderNext}
            renderPrevButton={renderPrev}
            items={items}
          />
         

        </div>        
    </Fragment>
  )
}

export default Carousel
