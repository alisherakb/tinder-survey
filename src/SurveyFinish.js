import React from 'react';
import './App.css';

function SurveyFinish(props) {
  return (
    <div className="intro-container">
      <div className="header">
        <div className="header-redBubble" />
        <div className="header-title">
          <h1>THANK YOU!</h1>
          <span>Receive • Redeem • Repeat</span>
        </div>
        <div className="header-greenBubble" />
      </div>
      <div className="body">
        <img src={require('./percentage.png')} />
        <p>
          Это был эксперимент ради выявлений ваших преференций. Мы и в правду
          работаем над сбором таких специальных предложений для вас!
        </p>
        {/* <span>Свайп влево если бы воспользовались, свайп вправо если нет.</span> */}
        <button onClick={props.onClick}>Связаться с нами</button>
      </div>
    </div>
  );
}

export default SurveyFinish;
