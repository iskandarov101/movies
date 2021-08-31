import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {RightIcon} from '../../assets/icons/Icons';
import {LeftIcon} from '../../assets/icons/Icons';

import Betman from '../../assets/images/betman.jpg';
import WonderWoman from '../../assets/images/ww.jpg';
import Mulan from '../../assets/images/mulan.jpg';
import Goll from '../../assets/images/goll.jpg';
import Kaxa from '../../assets/images/kaxa.jpg';
import Real from '../../assets/images/real.jpg';

import "./Corousel.scss";

function Corusel() {

  const [index, setIndex] = useState(0)

  useEffect(()=> {
    document.documentElement.style.setProperty("--index", index)
  }, [index])

  return(
    <>
      <div className="slider">
        <ul className="slider-list">
          <li className="slider-item">
            <Link to={`/movie/${791373}`} className="slider-link">
              <img className="slider__img" src={Betman} width="1600" height="500" alt="Betman"/>
            </Link>
          </li>
          <li className="slider-item">
            <Link to={`/movie/${464052}`} className="slider-link">
              <img className="slider__img" src={WonderWoman} width="1600" height="500" alt="WonderWoman"/>
            </Link>
          </li>
          <li className="slider-item">
            <Link to={`/movie/${337401}`} className="slider-link">
              <img className="slider__img" src={Mulan} width="1600" height="500" alt="Mulan"/>
            </Link>
          </li>
          <li className="slider-item">
            <Link to={`/movie/${661804}`} className="slider-link">
              <img className="slider__img" src={Goll} width="1600" height="500" alt="De Goll"/>
            </Link>
          </li>
          <li className="slider-item">
            <Link to={`/movie/${661804}`} className="slider-link">
              <img className="slider__img" src={Kaxa} width="1600" height="500" alt="Kaxa"/>
            </Link>
          </li>
          <li className="slider-item">
            <Link to={`/movie/${661804}`} className="slider-link">
              <img className="slider__img" src={Real} width="1600" height="500" alt="Real"/>
            </Link>
          </li>
        </ul>
        <button className="slider-controller controller-left" onClick={()=> {
          index > 0 && setIndex(index - 1)
        }}><LeftIcon/></button>
        <button className="slider-controller controller-right" onClick={()=> {
          index < 5 && setIndex(index + 1)
        }}><RightIcon/></button>
      </div>
    </>
  )
}

export default Corusel