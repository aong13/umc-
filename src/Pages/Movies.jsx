import React from 'react';
import { movies } from '../movieDummy';
import Movie from '../Components/Movie';
import MovieDetail from '../Components/MovieOverview';
import { useNavigate } from 'react-router-dom';

export default function Movies() {
  const navigate = useNavigate();

  const onClickImg = (movie) => () => {
    navigate(`/movies/${movie.title}`, {
      state: {
        title: movie.title,
        poster_path: movie.poster_path
      },
    });
  };

  return (
    <div className='app-container'>
      {movies.results.map((movie, index) => (
        <div className='movie-container' key={index} onClick={onClickImg(movie)}>
          <Movie
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
          />
          <div className='movie-overview'>
            <MovieDetail
              title={movie.title}
              overview={movie.overview}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
