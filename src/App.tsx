import React from 'react';
import ExploreBar from './components/explore/navbar/ExploreBar'
import PrincipalCard from './components/explore/main/principalCard/PrincipalCard'
import Tendencies from './components/explore/main/tendencies/Tendencies'
import TendenciesWithImg from './components/explore/main/tendenciesWithImg/tendenciesWithImg'

function App() {
  return (
    <div className="App">
      <ExploreBar/>
      <PrincipalCard/>
      <Tendencies/>
      <TendenciesWithImg/>
     
    </div>
  );
}

export default App;
