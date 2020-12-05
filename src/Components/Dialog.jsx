import React from 'react';
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import { DialogContent } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme)=>({
  root:{
    backgroundColor:'#121212'
  }
}))

function SimpleDialog(props) {
    const { onClose,  open , URL} = props;
    const classes  = useStyles()
    const handleClose = () => {
      onClose(open);
    };
    


    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} URL={URL} maxWidth="xl">
          <DialogContent className={classes.root}>
          {URL}
          </DialogContent>
      </Dialog>
    );
  }
  
  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    URL : PropTypes.func.isRequired,
  };
  
export default SimpleDialog