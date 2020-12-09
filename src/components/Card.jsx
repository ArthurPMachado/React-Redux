import React from 'react';

import './card.css';

function getColor(props) { 
  const { red, green, blue, purple } = props;

  if(red) return "red"
  if(green) return "green";
  if(blue) return "blue";
  if(purple) return "purple";
  return "";
}

function Card(props) {
  const { title, children } = props;

  return (
    <div className={`card ${getColor(props)}`}>
      <div className="header">
        <span className="title">{title}</span>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default Card;