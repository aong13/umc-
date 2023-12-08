import React from 'react'
import { tvs } from '../tvDummy';
import TV from '../Components/TV';


export default function TVs() {
  return (
    <div className='app-container'>
    {tvs.results.map((tv, index) => (
      <div className='movie-container' key={index}>
        <TV
          title={tv.name}
          poster_path={'https://image.tmdb.org/t/p/w1280'+tv.poster_path}
          vote_average={tv.vote_average}
        />
      </div>
    ))}
  </div>
  )
}