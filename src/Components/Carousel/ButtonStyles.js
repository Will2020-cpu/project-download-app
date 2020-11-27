import {makeStyles} from '@material-ui/core/styles';

const ArrowButtonStyles = makeStyles((theme) =>({
    root: {
      borderRadius: '50%',
      border: '2px solid #fff',
      backgroundColor:'#000',
      opacity: '0.6',
      width: 40,
      minWidth: 40,
      height: 40,
      '& $label': {
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
      },
      '&:hover': {
        '& $label': {
          transform: 'scale(1.3)',
          [theme.breakpoints.up('md')]: {
            transform: 'scale(1.7)',
          },
          color:'#E2B616',
          opacity:'none',
        },
      },
      '&:disabled':{
        visibility: 'hidden'
      },
      [theme.breakpoints.up('sm')]: {
        width: 48,
        minWidth: 48,
        height: 48,
      },
      [theme.breakpoints.up('md')]: {
        width: 64,
        minWidth: 64,
        height: 64,
      },
    },
    label: {
      color:theme.palette.common.white,
      opacity:'none'
    },
  }))

export default ArrowButtonStyles