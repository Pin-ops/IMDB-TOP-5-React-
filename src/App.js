import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import ChartTrends from './components/ChartTrends';
import TvVideos from './components/TvVideos';
import Categories from './components/Categories';
import Hata from './components/Hata'


function App() {
  return (
    <div>
     <Header/>
     <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/movies" component={ Movies }/>
        <Route path="/chart&trends" component={ ChartTrends}/>
        <Route path="/tv&videos" component={ TvVideos }/>
        <Route path="/categories" component={ Categories }/>
        <Route component={ Hata }/>
     </Switch>
    </div>
  );
}

export default App;
