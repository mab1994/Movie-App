import React from 'react'
import MovieCard from './MovieCard'

const MovieList = props => {
    return(
        <div className="d-flex justify-content-center">
            {
                props.movies.map(el => <MovieCard delete={id => props.delete(id)} movie={el}/>)
            }
        </div>
    )
}

export default MovieList