import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageList from './ImageList/ImageList';
import unsplash from '../api/unsplash';

class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            imageData : []
        }
    }

    onSearchSubmit = async (word) =>{
        const response = await unsplash.get("search/photos", {
            params: {
                query : word
            }
        })

        this.setState({
            imageData : response.data.results
        })
        
    }

    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <label>Image found : {this.state.imageData.length}</label>
                <br />
                <ImageList images={this.state.imageData}/>
            </div>
        )
    }
}

export default App;