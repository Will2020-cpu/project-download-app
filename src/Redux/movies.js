import Movies from '../Components/json/movies.json'


const defaultState = {
    peliculas: Movies,
}

const reducerUsers = (state= defaultState, action) =>{
   if(action.type==="ELEMENTO_SELECCIONADO"){
       return{
           ...state,
            peliculaSeleccionada: action.cover
       }
   }
   else{
       return(state)
   }
}

export default reducerUsers