import React, {Component} from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './../styles/home.css'

function Name(props) {
    return(
        <div>My name is {props.name}</div>
    )
}

function Card(props) {
    return(
        <div className="card">
            <div className="card-content">
                <p className="title">
                Title
                </p>
                <p className="subtitle">
                Dexcription
                </p>
            </div>
            <footer className="card-footer" onClick={props.onClick}>
                <p className="card-footer-item">
                <span>
                    Action
                    <span className="icon"><i className="fa fa-play"></i></span>
                </span>
                </p>
            </footer>
        </div>
    )
}

class Home extends Component {

    naviagateTo(route) {
        console.log('Came here!');
        this.props.history.push('/' + route);
    }

    render() {
        let style = {padding: '20px'};
        let margintop = {marginTop: '20px'};

        let content1 = {title: 'Tic Tac', description: 'Fun game', action: 'Play'};
        return(
            <div style={style}>
                <Name name={'Alisha'}/>
                <h3><Link to={'/tic-tac'}>Wanna play tic tac?</Link></h3>
                
                <div className="columns" style={margintop}>
                    <div className="column">
                        <Card onClick={() => this.naviagateTo('tic-tac')}></Card>
                    </div>
                    <div className="column">
                        <Card></Card>
                    </div>
                    <div className="column">
                        <Card></Card>
                    </div>
                </div> 
            </div>
        )
    }
}


export default Home;