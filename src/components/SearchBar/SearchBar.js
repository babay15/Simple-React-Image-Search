import React from 'react';

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            word : ""
        }
    }
    

    onInputChange = (event) =>{

        var text = event.target.value;

        this.setState({
            word : text
        })
    }

    onFormSubmit = (event) =>{
        event.preventDefault();

        //mengubah function yang dideklarasikan di parent
        //menjadi props, dan melakukan manipulasi di children
        this.props.onSubmit(this.state.word)
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    <label>Search</label>
                        <div className="ui icon input">
                            <input 
                                value={this.state.word} 
                                type="text" 
                                onChange={this.onInputChange} 
                                onClick={this.onInputClick}
                                />
                        </div>
                    </div>             
                </form>
            </div>
            
        )
    }
}