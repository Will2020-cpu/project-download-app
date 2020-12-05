import React from 'react';
import { makeStyles, withStyles, fade } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 100,
      width: '100%',
      backgroundColor: '#f5c518',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%'
  },
  iniciar: {
    paddingRight: theme.spacing(3),
    fontWeight:theme.typography.fontWeighRegular,
    fontSize:theme.typography.pxToRem(16),
  },
  
  demo2: {
    backgroundColor: '#000',
    display:'flex',
    justifyContent:'space-between',
    color:'#f5c518'
  },
  container:{
    display:'flex',
    width:'90%',
    margin:'0 auto'
  },
  containerComentario:{
    marginLeft:20
  },

  input:{
     width:'100vh',
     backgroundColor:fade(theme.palette.common.white,0.2),
     border:'none',
     fontWeight:theme.typography.fontWeightRegular,
     fontSize:theme.typography.pxToRem(14),
     fontFamily:'Roboto Sans',
     padding:theme.spacing(2),
     borderRadius:theme.shape.borderRadius,
     transition:'height 0.5s',
     color:'#fff',
     height:'60px',
     resize:'none',
     '&:focus':{
         outline:'none',
         boxShadow:'inset 0 0 0 2px #f5c518',
         height:'100px'
     }
  }
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo2}>
        <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab label="0 Comentarios" />
          <StyledTab label="6 Comentarios de amigos" />
        </StyledTabs>
          <Typography className={classes.iniciar} variant="h5">Inicia sesion</Typography>
      </div>
      <TabPanel value={value} index={0}>
            <div className={classes.container}>
                <Avatar alt="panic" src="https://avatars1.githubusercontent.com/u/61927270?s=400&u=c91b3f1ec0d2cae8c86ade0ff6e7daff8de1b706&v=4"/>
                <div className={classes.containerComentario}>
                   <textarea name="" id="" cols="30" rows="10" className={classes.input} placeholder="Escribe tu comentario"/>
                </div>
            </div>
            
        </TabPanel>
    </div>
  );
}
