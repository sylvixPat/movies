import { useState, useEffect } from "react";
import VideoIcon from "./VideoIcon";

const MovieCard = ({ movie, index }) => {

    const [videoUrl, setVideoUrl] = useState('');

    async function fetchMovieVideo(movieId) {
        const apiURL = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;//es-ES
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
            const trailer = data.results.find(video => video.type === 'Trailer');
            if (trailer) {
                setVideoUrl(`https//www.youtube.com/watch?v=${trailer.key}`);
            }
        } catch (error) {
            console.error('Error al obtener las pelis: ', error);
        }
    }

    useEffect(() => {
        async function getMovieVideo() {
            fetchMovieVideo(movie.id);
        }
        getMovieVideo();
    }, [movie.id]);

    return (
        <div className="col-4">
            <div className="card mt-2 mb-2">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.overview}</p>
                    <p>Vote average: ⭐️{movie.vote_average}</p>
                    <p>Votes: 🖍️{movie.vote_count}</p>
                    <p>{videoUrl && <VideoIcon videoUrl={videoUrl} />}</p>

                </div>
            </div>
        </div>
    )
}

export default MovieCard