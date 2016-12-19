import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <form className="input-group">
                    <input type="text" className="form-control" placeholder="Get a 5 day forecast for city"
                    value={this.state.term} onChange={this.onInputChange}/>
                    <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>

            </form>
        )
    }
}