import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.scss';

const Header = ()=> {
  let history = useHistory(); 

  const [searchText, setSearchText] = useState('')

  useEffect(()=> {
    if(searchText.length > 0){
      history.push(`/search/${searchText}`)
    } else{
      history.push('/')
    }
  }, [searchText]);
  return(
    <div className='header'>
      <header className='container hedaer-inner'>
        <Link to="/" className="logo">Movie<span className="logo-inner">.uz</span></Link>
        <div>
          <Link className='header-link' to='/'>HomePage</Link>
          <Link className='header-link header-center' to='/populars'>Popular movies</Link>
          <Link className='header-link' to='/movies'>Movies</Link>
        </div>
        <Link className='header-link header-sign'>Sigh up</Link>
        <input className='header-input' 
          type="text" 
          placeholder='Search' 
          onChange={(e)=> setSearchText(e.target.value)} 
          value={searchText} />
      </header>
    </div>
  )
}

export default Header;