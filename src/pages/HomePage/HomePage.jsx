import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import axios from 'axios';

import Corousel from "../../components/Corousel/Corousel";
import MovieCard from "../../components/MovieCard/MovieCard";

// import {RightIcon} from '../../assets/icons/Icons';
// import {LeftIcon} from '../../assets/icons/Icons';


import './HomePage.scss';
import loader from '../../assets/images/loaders/loader.gif';
const HomePage = ()=> {
  const [ movieList, setMovieList ] = useState({
    isFetched: false,
    data: [],
    error: null
  });

  useEffect(()=> {
    axios.get('https://api.themoviedb.org/3/movie/popular?page=1', {
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
  }, [])

  return(
    <>
      <Corousel/>

      <div className='container'>
        <h2 className='movie-title'>(NEW)</h2>
        {
          movieList.isFetched ? (
            <div className='movie-holder '>
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
        {/* <div className='page-footer'>
          <Link className='next-page' onClick={()=> {
            setChangePage(change - 1)
          }}><LeftIcon/></Link>
          <Link className='next-page' onClick={()=> {
           setChangePage(change + 1)
          }}><RightIcon/></Link>
        </div> */}
     
      </div>
    </>
  )
}

export default HomePage;