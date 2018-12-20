import React, {Component} from 'react';
import './../styles/form.css';

class SubForm extends Component {
    // constructor(props) {
    //     super(props);
    //     console.log(props);
    // }

    // onFormSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(this.state.searchVal);
    // }

    // onInputChange = (event) => {
    //     this.setState({searchVal: event.target.value.toUpperCase()});
    // }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={() => this.props.onSubmit}>
                <div className="field">
                    <label htmlFor="name">Image search</label>
                    <input id="name"  value={this.props.searchVal} type="text" onChange={() => this.props.onChange}/>
                </div>
                </form>                    
            </div>              
        );
    }
}

class Form extends Component {
    state = {
        searchVal: 'Alisha'
    };

    handleSubmit = (event) => {
        console.log('handlesub');
        event.preventDefault();
        console.log(this.state.searchVal);
    }

    onInputChange = (event) => {
        this.setState({searchVal: event.target.value.toUpperCase()}); 
    }

    render() {
        
        return(
            <div style={{margin: '20px'}}>
                <SubForm search={this.state.searchVal} onSubmit={this.handleSubmit} onChange={this.onInputChange}/>
            </div>
        );
    }
}


export default Form;