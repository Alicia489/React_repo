import React, {Component} from 'react';
import './../styles/home.css';
import Loader from './shared/loader';

class Weather extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         lat: null,
    //         errorMessage: ''
    //     };
    // }

    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => console.log('Error is ', err)
        );
    }

    componentDidUpdate() {
        console.log('Hey it just updated!');
    }

    render() {
        return (
            // {/* <div>
            //     {this.state.lat && <h4>Latitude is: {this.state.lat}</h4>}
            //     {this.state.errorMessage && <h3>Error is: {this.state.errorMessage}</h3>}
            //     {(!this.state.lat && !this.state.errorMessage) && <h4>Loading...</h4>}
            // </div>        */}
            <SeasonDisplay lat={this.state.lat}/>
        );
    }
}

const getSeason = (lat) => {
    if (!lat) {
        return '';
    }
    if (lat < 50) {
        return SeasonConfig.winter;
    } 
    return SeasonConfig.summer;
}

const SeasonConfig = {
    winter : {
        text: 'So Chilly!',
        iconName: 'snowflake',
        key: 'winter'
    },
    summer : {
        text: 'Hit the beach!',
        iconName: 'sun',
        'key': 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat);
    if (props.lat) {
        return (
            <div className={season.key}>
                <i className={`icon massive top ${season.iconName}`}></i>
                <h1 className="text-weather">Season: {season.text}</h1>
                <i className={`icon massive bottom ${season.iconName}`}></i>
            </div>  
        );
    } else {
        return <Loader/>
    }
        

}

export default Weather;