import React from 'react';

import './style.scss';

const WeekThree = () => {
  return (
    <div className="week-three">
      <div className="title-container">
        <h1 className="title">Week 3</h1>
        <h2 className="sub-title">2023-Jun-26</h2>
      </div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export { WeekThree };
