import react from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Containers/Home';
import Login from './Containers/Login';
import movies from './Components/json/movies.json';
import cx from 'clsx';
import MovieInformation from './Containers/MovieInformation'
import PageError from './Containers/PageError';

const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route  path='/login' component={Login}/>
            <Route path='/pelicula/:peliculaID' component={MovieInformation}/>
            <Route  component={PageError}/>
        </Switch>
    )
}

export default Routes