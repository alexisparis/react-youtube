import React, {Component } from 'react'

class SearchBar extends Component {

    constructor(props) {
        super(props)

        this.state = {term : ""}
    }

    onChange(event) {
        this.setState({term : event.target.value});
        this.props.onTermChanged(event.target.value);
    }

    render() {
        return (
            <div className="search-bar">
                <input value={this.state.term}
                    onChange={event => {
                        this.onChange(event)
                    }}/>
            </div>
        )
    }

}

export default SearchBar
