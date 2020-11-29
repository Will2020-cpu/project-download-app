import react from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Containers/Home';
import Login from './Containers/Login';
import movies from './Components/json/movies.json';
import cx from 'clsx';
import MovieInformation from './Containers/MovieInformation'

const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route  path='/login' component={Login}/>
            {
                movies.map(item=>(
                    <Route path={cx('/pelicula/',item.nombre)} component={MovieInformation} key={item.id}/>
                ))
            }
        </Switch>
    )
}

export default Routes