import { Link } from 'react-router-dom';

import './MovieCard.scss';

const MovieCard = ({ image, title, id, rating, year})=> {
  return(
   <>
    <div className="movie-card">
      <Link className='movie-link' to={`/movie/${id}`}>
        <p className='movie-rating'>{rating}</p>
        <img src={`https://image.tmdb.org/t/p/w300/${image}`} alt="movie-image" className="card-image" />
        <h2 className="card-title">{title}</h2>
        <div className='movie-bottom-wrapper'>
          <span className='movie-year'>{year}</span>
          <button className='movie-btn'>More Info</button>
        </div>
      </Link>
    </div>
    
  </>
  )
}

export default MovieCard