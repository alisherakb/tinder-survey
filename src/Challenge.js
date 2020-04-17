import React, { useState } from 'react';
import './App.css';
import Deck from './Deck';
import { Progress } from 'semantic-ui-react';

const Challenge = ({ handleSurveyEnd }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const [responses, setResponse] = useState([]);
  const handleCardDrop = (isGone, dir, index) => {
    // console.log(isGone, dir, index);
    if (isGone === true) {
      setCurrentCardIndex(index);
      const addResponse = responses.concat([{ hasAdded: dir, id: index }]);
      setResponse(addResponse);
    }
  };
  return (
    <div className="challenge">
      {/* <Progress value="3" total="10" progress="ratio" />s */}
      <Deck
        onCardDrop={(isGone, dir, index) => handleCardDrop(isGone, dir, index)}
        onSurveyEnd={() => handleSurveyEnd()}
      />
    </div>
  );
};

export default Challenge;
