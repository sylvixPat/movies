import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Button from './Button.jsx';

export default function MovieList() {
    const [movieList, setMovieList] = useState([]);
    const [pagination, setPagination] = useState(1);

    async function fetchPopularMovies(page) {
        const apiURL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page-${page}`;//es-ES
        console.log('Fetch ', page, apiURL);
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdhZDlhYTk0OGIxZDdhOTM1Y2ZhZjBhNjZjMTMxMCIsIm5iZiI6MTcyMjMwMTA4OC4zMDM3NzMsInN1YiI6IjY2YTgzOGRiMjEzNjhmNDc4MTVjMmM0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9fxW9e9hIVU8d0_AHo2Pu9-NEsIQ69GjnWO6SbXZPf8",
            },
        };
        try { //solicitud fetch
            const response = await fetch(apiURL, options);
            const data = await response.json();
            console.log(response, data);
            return (data.results);
        } catch (error) {
            console.error('Error al obtener las pelis: ', error);
        }
    }

    const nextPage = () => {
        setPagination(pagination + 1);
    }

    const prevPage = () => {
        if (pagination > 1) {
            setPagination(pagination - 1);
        }
    }

    useEffect(() => {
        async function getMovies() {
            const movies = await fetchPopularMovies(pagination);
            console.log('Use effect ', pagination);
            setMovieList(movies);
        }
        getMovies();
    }, [pagination]);

    return (
        <>
            <div className="container">
                <h1>Pelis populares</h1>
                <Button handleClick={prevPage}>Anterior</Button>
                <Button handleClick={nextPage}>Siguiente</Button>
            </div >
            <div className="container d-flex flex-row flex-wrap mt-2 mb-2">
                {movieList.map((movie, index) => (
                    <MovieCard movie={movie} key={index} index={index} />
                ))}
            </div>
        </>
    )
}