import React from 'react';
import { string, number, array } from 'prop-types';
import { animated, interpolate, onFrame } from 'react-spring';
import './App.css';

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
  const {
    tags,
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
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans),
        }}
      >
        {style === 0 ? (
          <div className="card">
            <img src={pics[0]} alt="profilePicture" />
            <animated.div
              style={{
                opacity: x.interpolate([0, 100], [0, 1]),
                position: 'absolute',
                top: 32,
                left: 16,
                right: 0,
                bottom: 0,
                width: 80,
                height: 48,
                zIndex: 3,
                border: 'solid',
                fontSize: 32,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 5,
                borderColor: '#33CB76',
                fontWeight: 700,
                color: '#33CB76',
              }}
            >
              <span
                style={{
                  padding: 0,
                  margin: 0,
                  textAlign: 'center',
                  paddingLeft: 5,
                }}
              >
                YES
              </span>
            </animated.div>
            <animated.div
              style={{
                opacity: x.interpolate([-100, 0], [1, 0]),
                position: 'absolute',
                top: 32,
                left: 200,
                bottom: 0,
                width: 80,
                height: 48,
                zIndex: 3,
                fontSize: 32,
                fontWeight: 700,
                border: 'solid',
                fontSize: 32,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 5,
                borderColor: '#F85067',
                color: '#F85067',
              }}
            >
              <span
                style={{
                  padding: 0,
                  margin: 0,
                  textAlign: 'center',
                  paddingLeft: 10,
                }}
              >
                NO
              </span>
            </animated.div>
            <div className="tagContainer">
              <span>{tags}</span>
            </div>
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
        ) : style === 1 ? (
          <div className="card">
            <img src={pics[0]} alt="profilePicture" />
            <animated.div
              style={{
                opacity: x.interpolate([0, 100], [0, 1]),
                position: 'absolute',
                top: 32,
                left: 16,
                right: 0,
                bottom: 0,
                width: 80,
                height: 48,
                zIndex: 3,
                border: 'solid',
                fontSize: 32,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 5,
                borderColor: '#33CB76',
                fontWeight: 700,
                color: '#33CB76',
              }}
            >
              <span
                style={{
                  padding: 0,
                  margin: 0,
                  textAlign: 'center',
                  paddingLeft: 5,
                }}
              >
                YES
              </span>
            </animated.div>
            <animated.div
              style={{
                opacity: x.interpolate([-100, 0], [1, 0]),
                position: 'absolute',
                top: 32,
                left: 200,
                bottom: 0,
                width: 80,
                height: 48,
                zIndex: 3,
                fontSize: 32,
                fontWeight: 700,
                border: 'solid',
                fontSize: 32,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 5,
                borderColor: '#F85067',
                color: '#F85067',
              }}
            >
              <span
                style={{
                  padding: 0,
                  margin: 0,
                  textAlign: 'center',
                  paddingLeft: 10,
                }}
              >
                NO
              </span>
            </animated.div>
            <div className="tagContainer">
              <span>{tags}</span>
            </div>
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
            <animated.div
              style={{
                opacity: x.interpolate([0, 100], [0, 1]),
                position: 'absolute',
                top: 64,
                left: 16,
                right: 0,
                bottom: 0,
                width: 80,
                height: 48,
                zIndex: 3,
                border: 'solid',
                fontSize: 32,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 5,
                borderColor: '#33CB76',
                fontWeight: 700,
                color: '#33CB76',
              }}
            >
              <span
                style={{
                  padding: 0,
                  margin: 0,
                  textAlign: 'center',
                  paddingLeft: 5,
                }}
              >
                YES
              </span>
            </animated.div>
            <animated.div
              style={{
                opacity: x.interpolate([-100, 0], [1, 0]),
                position: 'absolute',
                top: 64,
                left: 200,
                bottom: 0,
                width: 80,
                height: 48,
                zIndex: 3,
                fontSize: 32,
                fontWeight: 700,
                border: 'solid',
                fontSize: 32,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 5,
                borderColor: '#F85067',
                color: '#F85067',
              }}
            >
              <span
                style={{
                  padding: 0,
                  margin: 0,
                  textAlign: 'center',
                  paddingLeft: 10,
                }}
              >
                NO
              </span>
            </animated.div>
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
  distance: string,
  text: string,
  pics: array,
};

export default Card;
