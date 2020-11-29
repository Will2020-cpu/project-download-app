import react from 'react';
import Routes from './routes'
import NavBar from './Components/NavBar'
import {Provider} from 'react-redux'
import store from './Redux/store'

function App() {
  return (
    <Provider store={store}>
        <NavBar/>
        <Routes/>
    </Provider>
  );
}

export default App;
