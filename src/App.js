import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Game from './components/game';
import Home from './components/home';

class App extends Component {
    render() {
        return(
            <Router>     
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/tic-tac' component={Game} />
                    {/* <Route exact path='/Logout/:number' component={Logout} /> */}
                </Switch>
            </Router>
        )
    }
}

export default App;