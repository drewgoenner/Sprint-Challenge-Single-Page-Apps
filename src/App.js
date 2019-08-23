import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import LocationList from './components/LocationsList';
import EpisodesList from './components/EpisodesList';
import {Route} from 'react-router-dom';


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path = '/' component = {WelcomePage} />
      <Route path = '/character' component = {CharacterList}/>
      <Route path = '/location' component = {LocationList}/>
      <Route path = '/episode' component = {EpisodesList}/>
    </main>
  );
}


