function MovieOverview({ title, overview }) {
  return (
    <div className="detail">
        <h4>{title}</h4>
        <p>{overview}</p>
    </div>
  );
}

export default MovieOverview;
