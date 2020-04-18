import React, { useState } from 'react';
import './App.css';
import Onboarding from './Onboarding';
import Challenge from './Challenge';
import SurveyFinish from './SurveyFinish';

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  return (
    <div className="App">
      {isStarted && !isFinished ? (
        <Challenge handleSurveyEnd={() => setIsFinished(true)} />
      ) : isFinished ? (
        <SurveyFinish />
      ) : (
        <Onboarding onClick={() => setIsStarted(true)} />
      )}
    </div>
  );
}

export default App;
