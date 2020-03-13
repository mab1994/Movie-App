import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            rating: 1
        }
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue}, () => this.props.rate(this.state.rating))
      }
    render(){
        return(
            <div className="d-flex align-items-center justify-content-center">
                <input 
                    type="text" 
                    placeholder="Search for a movie..." 
                    onChange={e => this.props.search(e.target.value)} 
                />
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={this.state.rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
            </div>
        )
    }
}
export default Search;