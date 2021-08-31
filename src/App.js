import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";

//===========  PAGE FOLDER==========
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviePage/MoviePage";
import PopularPage from "./pages/PopularPage/PopularPage";
import SingleMovie from "./pages/SingleMovie/SingleMovie";
import SearchPage from "./pages/SearchPage/SearchPage";

import Header from './containers/Header/Header';
//=======STYLES======
import './assets/styles/main.scss';
function App() {
  
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/movies' component={MoviesPage} />
        <Route exact path='/populars' component={PopularPage} />
        <Route exact path='/search/:searchText' component={SearchPage} />
        <Route exact path='/movie/:id' component={SingleMovie} />
      </Switch>
    </Router>
  );
}

export default App;
