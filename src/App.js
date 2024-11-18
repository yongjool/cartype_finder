import './App.css';

import React, { useState } from "react";


import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import ResultBox from './components/ResultBox/ResultBox';

const App = () => {

  const [predictions, setPredictions] = useState(null);

  return (
    <div>
      <Navbar />
      <Body setPredictions={setPredictions}/>
      <ResultBox predictions={predictions}/>
    </div>
  );
}

export default App;
