import React, {Component} from 'react';
import './../styles/form.css';
import unsplash from '../api/unsplash';

//---------image card component

 class ImageCard extends Component  {
     constructor(props) {
        super(props);
        this.state = {spans: 0};
        this.imageRef = React.createRef();
     }

     componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
     }
    
     setSpans = () => {
        const height =  this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans});
     }
    
    render() {
        const {urls} = this.props.image;
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} src={urls.regular} alt="Nothing"/> 
            </div>
         );
    }  
}

// --------to view images 
const Images = (props) => {
    if (props.images.length > 0) {
        const images = props.images.map((image) => {
            return(
                // {/* <img src={image.urls.regular} key={image.id} alt="Nothing"/> */}
                <ImageCard image={image} key={image.id}/>
            );
        })
        return (
            <div className="image-list">
                {images}
            </div>
        );
    } else return <div>No images</div>
}

// -------------the search bar component
class SubForm extends Component {

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={(event) => this.props.onSubmit(event)}>
                <div className="field">
                    <label htmlFor="name">Image search {this.props.search}</label>
                    <input id="name"  value={this.props.search} type="text" onChange={(event) => this.props.onChange(event)}/>
                </div>
                </form>                    
            </div>              
        );
    }
}

// -----------the main Component
class Form extends Component {
    state = {
        searchVal: 'Alisha',
        images: []
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state.searchVal);

        // ---------------latest code to handle async wait

        const response = await unsplash.get('search/photos', {
            params: {
                    query: this.state.searchVal,
                    page: 1,
                    per_page: 10
                },
        });

        this.setState({images: response.data.results.slice()});
        console.log('response is ', response.data.results)
    }

    onInputChange = (event) => {
        this.setState({searchVal: event.target.value.toUpperCase()}); 
    }

    render() {
        
        return(
            <div style={{margin: '20px'}}>
                <SubForm search={this.state.searchVal} onSubmit={this.handleSubmit} onChange={this.onInputChange}/>
                <Images images={this.state.images}/>
            </div>
        );
    }
}


export default Form;