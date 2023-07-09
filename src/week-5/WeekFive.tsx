import React from 'react';

import './style.scss';

const WeekFive = () => {
  return (
    <div className="week-five">
      <div className="title-container">
        <h1 className="title">Week 5</h1>
        <h2 className="sub-title">2023-Jul-08</h2>
      </div>

      <div className='challenge'>
        <dialog className="accordion-container">
          <div className="header">
            <h2>The Barebones Of An Accordion</h2>
            <h3>Highlighting important details of the section and revealing more details upon a tap or click, if necessary.</h3>
          </div>
          <div className='body'>
            <section>
              <div className='body-title-container'>
                <span className='body-title'>
                  When and how it should be used?
                </span>
                <span className='body-icon'>
                  +
                </span>
              </div>
            </section>
            <section>
              <div className='body-title-container'>
                <span className='body-title'>
                  What's an accordion?
                </span>
                <span className='body-icon'>
                  -
                </span>
              </div>
              <div className='body-container'>
                <span className='body'>
                  The accordion is a graphical control element comprising a vertically stacked list of items, such as tables or thumbnails. An accordion is similar in purpose to a tabbed interface, a list of items where exactly on item is expanded into a panel.
                </span>
                <button>Read more</button>
              </div>
            </section>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export { WeekFive };
