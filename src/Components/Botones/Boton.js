import {makeStyles} from '@material-ui/core/styles';

const ButtonHover = makeStyles((theme)=>({
    root:{
        borderRadius:'5px',
        border:'1px solid #f5c518',
        transition:'0.5s',
        '&:hover':{
            backgroundColor:'#f5c518',
            boxShadow:'0 0 10px #f5c518, 0 0 40px #f5c518, 0 0 80px #f5c518',
            '& $label':{
                color:theme.palette.common.black
            }
        }
    },
    label:{
        color:theme.palette.common.white
    }
}))

export default ButtonHover