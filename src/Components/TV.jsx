function TV({title, poster_path, vote_average}) {  

    return (
      <div 
        className='container' 
      >
        <img src={poster_path} alt="tv포스터" />
        <div className="movie-info">
          <h4>{title}</h4>
          <span>{vote_average}</span>
        </div>
      </div>
    );
    }
    
    export default TV