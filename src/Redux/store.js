import {createStore} from 'redux';
import movies from '../Components/json/movies.json'


const initialState = {
    peliculas :movies,
    series:[]
}


const reducerEntrenador = (state = initialState,action) =>{
    return state   
}

export default createStore(reducerEntrenador)