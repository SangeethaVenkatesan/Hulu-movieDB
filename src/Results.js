import React, { useState, useEffect } from 'react'
import './Results.css'
import VideoCard from './VideoCard'
import requests from './requests'
import axios from './axios'
import FlipMove from 'react-flip-move'



function Results({ selectedOption }) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        //run the code once when results comp loads, when input is given, run it when the input field changes
        async function fetchData() {
            const request = await axios.get(selectedOption)
            console.log(request)
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [selectedOption])
    return (
        <div className="results">
            <FlipMove>
                {movies.map((movie) => (
                    <VideoCard key={movie.id} movie={movie} />
                ))}
            </FlipMove>
        </div>
    )
}

export default Results
