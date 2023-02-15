import React, { useState } from 'react'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import { fetchData } from '../helpers/AxiosHelper'
import CustomCard from './CustomCard'

export const SearchForm = ({addMovie}) => {

    const [movieName, setMovieName] = useState("")
    const [movie, setMovie] = useState({})
    const [error, setError] = useState(false)

    const handleChange = (e) =>{
        // console.log(e.target)
        const { value } = e.target
        setMovieName(value)

    }
    // console.log(movieName)

    const handleSubmit = async(e) =>{
        e.preventDefault()
        // prevent default is used to prevent the default behaviour of the browser which refreshes automatically on clicking submit.

        const result = await fetchData(movieName)
        if(result.Response === "True"){
            setMovie(result)
            setError(error)
        }else {
            setError(true)
        }
    }
    // console.log(movie)

    const removeDisplay = () =>{
        setMovieName("")
        setMovie({})
    }

    const handleAddMovie =(movie) => {

        addMovie(movie)
        setMovieName("")
        setMovie({})
    }
    
    return (
        <div className="search-form">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col xs={9}>
                        <Form.Control placeholder="Search Movie ..." 
                        onChange={handleChange} value ={movieName}/>
                    </Col>
                    <Col>
                        <Button variant="warning" type = "submit" placeholder="Last name">Search</Button>
                    </Col>
                </Row>
            </Form>

            <div className="mt-5 d-flex justify-content-center">
                {movie.imdbID && <CustomCard movie={movie} removeDisplay={removeDisplay} 
                handleAdd={ handleAddMovie}/>}
            </div>

            {error && (
                <Alert variant="danger" className="mt-5">No movies found. Try searching for another movie</Alert>
            )}
        </div>
    )
}
