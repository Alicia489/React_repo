import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Game from './components/game';
import Home from './components/home';
import Udemy from './components/udemy';
import Weather from './components/weather';

class App extends Component {

    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log('Position is ', position),
            err => console.log('Error is ', err)
         );

        return(
            <Router>     
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/tic-tac' component={Game} />
                    <Route exact path='/udemy' component={Udemy} />
                    <Route exact path='/weather' component={Weather} />
                    {/* <Route exact path='/Logout/:number' component={Logout} /> */}
                </Switch>
            </Router>
        )
    }
}

export default App;