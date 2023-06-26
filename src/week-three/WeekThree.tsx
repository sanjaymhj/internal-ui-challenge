import React from 'react';

import './style.scss';

const WeekThree = () => {
  return (
    <div className="week-three">
      <div className="title">WeekThree</div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export { WeekThree };
