import React from 'react'
import { Card, Button } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component'

const MovieCard = props => {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.movie.image} />
        <Card.Body>
            <Card.Title>{props.movie.title}</Card.Title>
            <Card.Text>
            {props.movie.year}
            </Card.Text>
            <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={props.movie.rating}
            />
            <Button onClick={() => props.delete(props.movie.id)} variant="danger">Delete</Button>
        </Card.Body>
        </Card>
    )
}

export default MovieCard