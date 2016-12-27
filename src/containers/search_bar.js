import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        // prevent default page reload
        event.preventDefault();
        // fetch weather data
        this.props.fetchWeather(this.state.term);
        //clear search input
        this.setState({term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group search-bar">
                <input type="text" className="form-control" placeholder="Get a 5 day forecast for city"
                       value={this.state.term} onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>

            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather: fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);