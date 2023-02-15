import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CustomCard = ({ movie = {}, removeDisplay, handleAdd, showDelete, removeMovie }) => {
    return (
        <Card className="text-dark" style={{ width: "20rem" }}>
            <Card.Img src={movie.Poster} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>
                    Rating: {movie.imdbRating}
                    <br />
                    Year: {movie.Released} <br />
                    Genre: {movie.Genre} <br />
                </Card.Text>

                {showDelete ? (
                    <Button onClick={()=>removeMovie(movie.imdbID)} variant="danger" className="mt-3 w-100">Discard
                    </Button>
                )
                    : (
                        <>
                            <div className="d-flex justify-content-between">
                            <Button variant="warning" onClick={() => handleAdd
                                ({ ...movie, type: "awesome" })}>Awesome
                                </Button>
                            <Button variant="danger" onClick={() => handleAdd
                                ({ ...movie, type: "boring" })}>Boring
                                </Button>
                               
                        </div>
                        <Button onClick={removeDisplay} variant="danger" className="mt-3 w-100">Discard</Button>
                        </>
                        
                    )
                }



            </Card.Body>
        </Card>
    )
}

export default CustomCard