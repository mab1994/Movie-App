import React, { Component } from 'react';
import MovieList from './components/MovieList'
import './App.css';
import Search from './components/Search';
import AddModal from './components/AddModal';
import { v4 as uuidv4 } from 'uuid'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      movies: [
        {
          id: uuidv4(),
          title: "Parasite",
          image: "https://static.cinebel.be/img/movie/poster/full/1020491_fr_parasite_1563531796112.jpg",
          year: 2019,
          rating: 5
        },
        {
          id: uuidv4(),
          title: "Interstellar",
          image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",
          year: 2014,
          rating: 4
        },
        {
          id: uuidv4(),
          title: "Joker",
          image: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
          year: 2019,
          rating: 3
        }
      ],
      keyword: '',
      keyrate: 1,
      id: ''
    }
  }

  // Declaration fonction delete
  delete = id => {
    this.setState({movies: this.state.movies.filter(el => el.id !== id)})
  }


  // Declaration fonction rating
  rate = newRate => {
    this.setState({keyrate: newRate})
  }

  // Declaration fonction search 
  search = newSearch => {
    this.setState({keyword: newSearch})
  }


  // Declaration
  addNewMovie = newMovie => {
    this.setState({movies: [...this.state.movies, newMovie]})
  }

  render(){
    return (
      <div className="App">
        <Search search={y => this.search(y)} rate={r => this.rate(r)}/>
        <AddModal addMovie={(x) => this.addNewMovie(x)}/>
        {
          this.state.movies.length === 0 && <h1>There's no more movies...</h1>
        }
        <MovieList delete={id => this.delete(id)} movies={this.state.movies.filter(el => el.rating >= this.state.keyrate && el.title.toUpperCase().includes(this.state.keyword.toUpperCase().trim()))}/>
      </div>
    )
  }
}

export default App;
