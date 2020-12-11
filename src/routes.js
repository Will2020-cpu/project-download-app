import React, { Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import Cuadricula from './Containers/Cuadricula';
import Home from './Containers/Home';
import Login from './Containers/Login';
import MovieInformation from './Containers/MovieInformation'
import PageError from './Containers/PageError';
import NavBar from './Components/NavBar'

const Routes = () =>{
    return(
        <Switch>
            <Route exact={true} path='/' render={() => (
                <Fragment>
                    <NavBar/>
                    <Home/>
                </Fragment>
            )}/>
            <Route  path='/login' component={Login}/>
            <Route path='/pelicula/:peliculaID' render={()=>(
                <Fragment>
                    <NavBar/>
                    <MovieInformation/>
                </Fragment>
            )}/>
            <Route path='/:ID' render={()=>(
                <Fragment>
                    <NavBar/>
                    <Cuadricula/>
                </Fragment>
            )}/>
            <Route  component={PageError}/>
            
        </Switch>
    )
}

export default Routes