import React from 'react';
import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component{
    constructor(){
        super()
        this.state = {searchItem: "dog"};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchSearchGiphys('dog');
      }

    handleChange(e){
        this.setState({searchItem: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.fetchSearchGiphys(this.state.searchItem);
    }

    render(){
        // console.log(this.props)
        debugger
        return(
            <div>
                <form onClick={this.handleSubmit}>
                    <label>Search a Giphy
                        <input type="text"
                        onChange={this.handleChange}
                        value={this.state.searchItem}
                        />
                    </label>
                    <button>Submit</button>
                </form>
                <GiphysIndex giphys={this.props.giphys}/>
                
            </div>
        )
    }
}

export default GiphysSearch;
