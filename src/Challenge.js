import React, { useState, useEffect } from 'react';
import './App.css';
import Deck from './Deck';
import { Line } from 'rc-progress';
import data from './data';

const Challenge = ({ handleSurveyEnd }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [progress, setProgress] = useState('0');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [responses, setResponse] = useState([]);
  const handleCardDrop = (isGone, dir, index) => {
    // console.log(isGone, dir, index);
    if (isGone === true) {
      setCurrentCardIndex(currentCardIndex + 1);
      const addResponse = responses.concat([{ hasAdded: dir, id: index }]);
      setResponse(addResponse);
    }
  };
  return (
    <div className="challenge">
      <Line
        percent={((currentCardIndex * 10) / data.length) * 10}
        strokeWidth="6"
        className="progress"
        trailWidth="6"
        trailColor="#E9E7EE"
        strokeLinecap="round"
        strokeColor="#8682A5"
      />
      <span className="progress-text">
        {currentCardIndex}/{data.length}
      </span>
      <Deck
        onCardDrop={(isGone, dir, index) => handleCardDrop(isGone, dir, index)}
        onSurveyEnd={() => handleSurveyEnd()}
      />
    </div>
  );
};

export default Challenge;
