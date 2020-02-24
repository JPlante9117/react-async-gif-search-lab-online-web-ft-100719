import React, { Component } from 'react'

class GifList extends Component {
    render(){
    const generateList = this.props.gifArray.map(gif => <li><img src={gif.images.downsized_large.url} /></li>)
    while (generateList.length !== 3){
        generateList.push(<li>NO CONTENT</li>)
    }
        return(
            <ul>
                {generateList}
            </ul>
        )
    }
}

export default GifList