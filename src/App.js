import './App.css';

import React, { useState } from "react";


import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import ResultBox from './components/ResultBox/ResultBox';

const App = () => {

  const [predictions, setPredictions] = useState(null);
/*
  return (
    <div>
      <h1>Custom Vision Prediction</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Predict"}
        </button>
      </form>
      {result && (
        <div>
          <h2>Prediction Result</h2>
          {predictions.map((prediction, index) => (
            <div key={index}>
              <p><strong>Tag:</strong> {prediction.tagName}</p>
              <p>
              <strong>Probability:</strong> {(
                prediction.probability * 100
              ).toFixed(0)}% 
            </p>
            </div>
          ))}
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
  */
  return (
    <div>
      <Navbar />
      <Body setPredictions={setPredictions}/>
      <ResultBox predictions={predictions}/>
    </div>
  );
}

export default App;
