import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './../styles/home.css';

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
                {props.details.title}
                </p>
                <p className="subtitle">
                {props.details.description}
                </p>
            </div>
            <footer className="card-footer" onClick={props.onClick}>
                <p className="card-footer-item">
                <span>
                    {props.details.action}
                    <span className="icon"><i className="fa fa-play"></i></span>
                </span>
                </p>
            </footer>
        </div>
    )
}

class Home extends Component {

    naviagateTo(route) {
        this.props.history.push('/' + route);
    }

    render() {
        let style = {padding: '20px'};
        let margintop = {marginTop: '20px'};

        const contents = [
            {title: 'Tic Tac', description: 'Fun game', action: 'Play'},
            {title: 'Udemy', description: 'learning', action: 'View'},
            {title: 'Blanky', description: 'Null', action: 'See blank'}
        ];
        
        return(
            <div style={style}>
                <Name name={'Alisha'}/>
                <h3><Link to={'/tic-tac'}>Wanna play tic tac?</Link></h3>
                
                <div className="columns" style={margintop}>
                    <div className="column">
                        <Card details={contents[0]} onClick={() => this.naviagateTo('tic-tac')}></Card>
                    </div>
                    <div className="column">
                        <Card details={contents[1]} onClick={() => this.naviagateTo('udemy')}></Card>
                    </div>
                    <div className="column">
                        <Card details={contents[2]}></Card>
                    </div>
                </div> 
            </div>
        )
    }
}


export default Home;