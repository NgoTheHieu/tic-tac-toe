  
import React from "react";
import { Card, ListGroupItem, ListGroup,Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
export default function MovieCard(props) {
  let movie = props.movie;
  let openModal = props.showModal;
  let language = props.movie.original_language;
  let language3;
  const language2 = () => {
      if(language=="en"){
          language3 = "English"
      } else if(language = "ko"){
          language3 = "Korean"
      } else if(language = "esp"){
          language3 = "Spanish"
      }
      return language3
  }
  
  return (
    <Card className="Card m-5 row center " style={{ width: "18rem" }}>
      <Card.Img
        variant="top" href=" "
        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
      onClick={()=> openModal}
      />
      <Card.Body>
        <Card.Title>{movie.original_title}</Card.Title>
        <Card.Text>
        {movie.genre_ids} 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem className="text-center">{movie.date}</ListGroupItem>
  <ListGroupItem className="text-center">This movie is in {language2()} language </ListGroupItem>
    <ListGroupItem className="text-center">{movie.popularity}</ListGroupItem>
    <ListGroupItem className="text-center">{movie.release_date}</ListGroupItem>
    <ListGroupItem className="text-center">Rating: {movie.vote_average} </ListGroupItem>
      </ListGroup>
      <Card.Body>
      <Button class="d-flex justify-content-center banner" id="load-more-btn" variant="info" type="button" >
      
        <Card.Link
      onClick={()=> openModal(movie.id)}>Trailer</Card.Link>
        </Button>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}