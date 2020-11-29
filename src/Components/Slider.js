import React, { Fragment } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CardCover from './CardCover'
import {makeStyles} from '@material-ui/core/styles'
import ButtonStyles from './Carousel/ButtonStyles'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Button from '@material-ui/core/Button'
import cx from 'clsx';
import {connect} from 'react-redux'

const useStyles = makeStyles((theme) =>({
    root:{
        display:'flex',
        position:'relative',
        margin:'0 auto',
          
    },
    Arrow:{
        position:'absolute',
        top:'30% ',
        transform:'translate(-50%)',
        [theme.breakpoints.down('xs')]:{
            displa:'none',
        }
    },
    ArrowRight:{
        right:-50,
        [theme.breakpoints.up('xl')]:{
            right:0
        },
        
    },
    ArrowLeft:{
        left:0,
    }
}))

const responsive = {
    0:{items:2},
    600:{items:3},
    960:{items:5},
    1280:{items:6},
    1600:{items:8}
}

const Carousel = ({movies}) => {
    const items = movies.map((item) =>{
        return(
            <CardCover nombre={item.nombre} img={item.cover}/>
        );
    })
    
    const ArrowStyles = ButtonStyles();
    const classes = useStyles();
 
    const renderPrev= ({isDisabled}) =>{
        return(
            <Button classes={ArrowStyles} className={cx(classes.Arrow,classes.ArrowLeft)} style={{visibility:isDisabled ? 'hidden' :'visible'}}>
                <KeyboardArrowLeft/>
            </Button>
        )
    }
    const renderNext= ({isDisabled})=>{
        return(
            <Button classes={ArrowStyles} className={cx(classes.Arrow,classes.ArrowRight)} style={{visibility:isDisabled ? 'hidden' :'visible'}}>
                <KeyboardArrowRight/>
            </Button>
        )
    }
    return(
        <Fragment>
            <div className={classes.root}>
                <AliceCarousel
                    mouseTracking
                    disableDotsControls
                    renderNextButton={renderNext}
                    renderPrevButton={renderPrev}
                    items={items}
                    responsive={responsive}
                />
             
            </div>
        </Fragment>
    )
};

const mapStateToProps = state => ({
    movies : state.peliculas
})

export default connect(mapStateToProps)(Carousel)