import React from 'react';

import './Accordion/style.scss';
import Accordion from './Accordion/Accordion';

const WeekFive = () => {
  return (
    <div className="week-five">
      <div className="title-container">
        <h1 className="title">Week 5</h1>
        <h2 className="sub-title">2023-Jul-08</h2>
      </div>

      <div className="challenge">
        <Accordion />
        <div className="background">
          <svg width="800" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="128" cy="100" r="100" fill="#e1e1e199" />
            <circle cx="210" cy="94" r="78" fill="#e1e1e199" />
            <circle cx="600" cy="328" r="100" fill="#D9D9D999" />
            <circle cx="640" cy="428" r="60" fill="#D9D9D999" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export { WeekFive };
