import React, { Component } from 'react'

class GifSearch extends Component {

    state = {
        searchTerm: ""
    }

    handleChange = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.searchTerm)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="search" value={this.state.searchTerm} onChange={this.handleChange} />
                <input type="submit" />
            </form>
        )
    }
}

export default GifSearch