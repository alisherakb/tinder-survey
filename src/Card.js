import React from 'react';
import { string, number, array } from 'prop-types';
import { animated, interpolate, onFrame } from 'react-spring';
import './App.css';

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
  const {
    name,
    age,
    distance,
    text,
    pics,
    style,
    original_price,
    sale_price,
  } = data[i];
  return (
    <animated.div
      key={i}
      className="challenge-card"
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}
    >
      {/* <animated.div
        {...bind(i)}
        style={{
          backgroundColor: 'black',
          opacity: interpolate([rot], trans),
        }}
      /> */}
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans),
        }}
      >
        {style == 0 ? (
          <div className="card">
            <img src={pics[0]} alt="profilePicture" />
            <img
              id="separator"
              src={require('./coupon.png')}
              alt="profilePicture"
            />

            <h2>{text}</h2>
            <div className="card-distance">
              <img src={require('./Path.png')} alt="profilePicture" />
              <span>{distance}</span>
            </div>
          </div>
        ) : style == 1 ? (
          <div className="card">
            <img src={pics[0]} alt="profilePicture" />
            <img
              id="separator"
              src={require('./coupon.png')}
              alt="profilePicture"
            />
            <div className="discount-style">
              <h2>{text}</h2>
              <div>
                <span id="originalPrice">{original_price}</span>
                <span id="salePrice">{sale_price}</span>
              </div>
            </div>
            <div className="card-distance">
              <img src={require('./Path.png')} alt="profilePicture" />
              <span>{distance}</span>
            </div>
          </div>
        ) : (
          <div className="text-card">
            <div className="discount-style">
              <h2>{text}</h2>
            </div>
          </div>
        )}
      </animated.div>
    </animated.div>
  );
};

Card.propTypes = {
  name: string,
  age: number,
  distance: string,
  text: string,
  pics: array,
};

export default Card;
