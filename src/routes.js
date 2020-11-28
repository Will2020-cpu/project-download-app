import react from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Containers/Home';
import Login from './Containers/Login';



const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route  path='/login' component={Login}/>
        </Switch>
    )
}

export default Routes