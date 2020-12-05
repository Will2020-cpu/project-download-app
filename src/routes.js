import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Cuadricula from './Containers/Cuadricula';
import Home from './Containers/Home';
import Login from './Containers/Login';
import MovieInformation from './Containers/MovieInformation'
import PageError from './Containers/PageError';

const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route  path='/login' component={Login}/>
            <Route path='/pelicula/:peliculaID' component={MovieInformation}/>
            <Route path='/:ID' component={Cuadricula}/>
            <Route  component={PageError}/>
            
        </Switch>
    )
}

export default Routes