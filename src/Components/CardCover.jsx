import React,{Fragment} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) =>({
    root:{
        maxWidth: 180,
        backgroundColor:'#1A1A1A',
        height: 320,
        borderRadius:'4px',
        overflow:'hidden',
        '&:hover':{
            '& $image':{
                border:'1px solid #f5c518',
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
const CardCover = ({img,nombre}) => {
    const classes = useStyles()

    return (
        <Fragment>
            <div className={classes.root}>
                <div className={classes.media}>
                    <img src={img} alt="cover" className={classes.image}/>
                </div>
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

export default CardCover
