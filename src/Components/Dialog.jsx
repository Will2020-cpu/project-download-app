import {React,useState} from 'react'
import { StaticDialog} from 'react-st-modal';
import ButtonStyles from './Botones/BtnPlay'
import {Button} from '@material-ui/core'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme)=>({
  Modal:{
    maxWidth:'853px',
    height:'480',
    borderRadius:0,
    backgroundColor:'transparent'
  },
}))

function SimpleDialog({url}) {
  const [isOpen, setOpen] = useState(false);
  const classes = useStyles()
  const botonPlay = ButtonStyles()
  return (
    <div>
      <StaticDialog
        isOpen={isOpen}
        className={classes.Modal}
        onAfterClose={() => {
          setOpen(false);
          // do something with dialog result
        }}
      >
        {/* see previous demo */}
        <div>
          {url}
        </div>
      </StaticDialog>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        classes={botonPlay}
      >
        <PlayCircleOutlineIcon/> Reproducir Trailer
      </Button>
    </div>
  );
}

export default SimpleDialog