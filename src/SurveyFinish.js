import React from 'react';
import './App.css';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

function SurveyFinish(props) {
  const { width, height } = useWindowSize();
  return (
    <div className="intro-container">
      <Confetti width={width} height={height} tweenDuration={8000} />
      <div className="header">
        <div className="header-redBubble" />
        <div className="header-title">
          <h1>THANK YOU!</h1>
          <span>Receive • Redeem • Repeat</span>
        </div>
        <div className="header-greenBubble" />
      </div>
      <div className="body">
        <span style={{ fontSize: 32, textAlign: 'center', marginTop: 32 }}>
          🎉🤝
        </span>
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
