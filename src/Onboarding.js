import React from 'react';
import './App.css';

function Onboarding(props) {
  return (
    <div className="intro-container">
      <div className="header">
        <div className="header-redBubble" />
        <div className="header-title">
          <h1>SPACER</h1>
          <span>Receive • Redeem • Repeat</span>
        </div>
        <div className="header-greenBubble" />
      </div>
      <div className="body">
        <img src={require('./percentage.png')} />
        <p>
          Привет, мы собрали список самых интересных предложений вокруг вас и
          хотели бы посмотреть заинтересованы вы или нет.
        </p>
        <span>Свайп влево если бы воспользовались, свайп вправо если нет.</span>
        <button onClick={props.onClick}>Продолжить</button>
      </div>
    </div>
  );
}

export default Onboarding;
