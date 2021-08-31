import { useEffect, useState } from "react";
import axios from 'axios';

import './SingleMovie.scss';
const SinglePage = ({match})=> {

  const [ movieInfo, setMovieInfo ] = useState({
    isFetched: false,
    data: [],
    error: null
  });

  useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}`, {
      params: {
        api_key: '8d08d31e1b08de961a19e2ae293de867'
      }
    })
    .then(function (response) {
      setMovieInfo({
        isFetched: true,
        data: response.data,
        error: false
      })
    })
    .catch(function (error) {
      setMovieInfo({
        isFetched: true,
        data: [],
        error: error,
      })
    })
    .then(function () {
      // always executed
    }); 
  }, [])

  console.log(movieInfo.data)

  return(
    <div>
      {
        movieInfo.isFetched ? (
          <div className="movie-info">
            <img className="movie-info-back" src={`https://image.tmdb.org/t/p/w400/${movieInfo.data.backdrop_path}`} alt="" />

            <div className="movie-info-front single-movie-container">
              <img className='movie-poster' src={`https://image.tmdb.org/t/p/w400/${movieInfo.data.poster_path}`} alt="" />
              <div className='front-info'>
              
                <h1 className='movie-info-title'>{movieInfo.data.title}</h1>
                <h2 className='movie-info-title'>{movieInfo.data.original_title}</h2>
                <h3 className='movie-info-title'>{movieInfo.data.tagline}</h3>
                <p className='movie-info-runtime'>{movieInfo.data.runtime} <span>min</span> </p>
                <a className='movie-link-btn' href={movieInfo.data.homepage} target='_blank'>Official site</a>
                <p className='movie-overview'>{movieInfo.data.overview}</p>
                <h4 className='movie-info-bunget'>Release date <span>{movieInfo.data.release_date}</span></h4>
                <h4 className='movie-info-bunget'>Budjet: ${movieInfo.data.budjet}</h4>
              
                <div className="box">
                  {
                  movieInfo.data.genres.map((genre, index)=> (
                    <button  className='box-inner' key={index}>{genre.name}</button>
                  ))
                  }
                </div>
              </div>
            </div>
            
          </div>
        ) : (
          <h2>Loading...</h2>
        )
      }
    </div>
  )
}

export default SinglePage;