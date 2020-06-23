import React from 'react';
import CityDetails from './components/CityDetails';
import ForeCast from './components/Forecast';
import TwitterFeeds from './components/TwitterFeeds';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

import './App.css';

// library.add(faStroopwafel)

function App() {
  return (
    <main className='app'>
      <CityDetails text="cloudy" />
      <TwitterFeeds />
      <ForeCast />

    </main>
  );
}

export default App;
