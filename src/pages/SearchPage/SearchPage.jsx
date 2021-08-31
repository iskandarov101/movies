import { useEffect, useState } from "react";
import axios from 'axios';
import MovieCard from "../../components/MovieCard/MovieCard";
import loader from '../../assets/images/loaders/loader.gif';
const SearchPage = ({match})=> {

  const [ movieList, setMovieList ] = useState({
    isFetched: false,
    data: [],
    error: null
  });

  useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${match.params.searchText}`, {
      params: {
        api_key: '8d08d31e1b08de961a19e2ae293de867'
      }
    })
    .then(function (response) {
      setMovieList({
        isFetched: true,
        data: response.data.results,
        error: false
      })
    })
    .catch(function (error) {
      setMovieList({
        isFetched: true,
        data: [],
        error: error,
      })
    })
    .then(function () {
      // always executed
    }); 
  }, [match.params.searchText])
  return(
   <div>
    {
      movieList.isFetched ? (
        <div className='movie-holder movie-top'>
          {
            movieList.data.map( (item, index) => (
              <MovieCard
              key={index}
              id={item.id}
              image={item.poster_path}
              title={item.title}
              rating={item.vote_average}
              year={item.release_date}
              />
            ))
          }
        </div>
      ) : (
      <img className='loader' src={loader} alt="loader" />
      )
    }
   </div>
  )
}

export default SearchPage;