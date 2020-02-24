import React, {Component} from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component{
    state = {
        gifs: []
    }

    fetchGifs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(allGifs => {
            let threeGifs = []
            if (allGifs.data.length <= 3) {
                threeGifs = allGifs.data
            } else {
                let i = 1
                while(threeGifs.length !== 3){
                    console.log(i++)
                    let item = allGifs.data[Math.floor(Math.random() * allGifs.data.length)]
                    if (!threeGifs.includes(item)){
                        threeGifs.push(item)
                    }
                }
            }
            this.setState({
                gifs: threeGifs
            })
        })
    }

    render(){
        return(
            <div>
                <GifSearch submitHandler={this.fetchGifs} />
                <GifList gifArray={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer