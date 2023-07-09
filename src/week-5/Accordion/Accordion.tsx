import { useState } from 'react';
const Accordion = () => {
  const data = {
    title: 'The Barebones Of An Accordion',
    subtitle:
      'Highlighting important details of the section and revealing more details upon a tap or click, if necessary.',
    body: [
      { title: 'When and how it should be used?', body: 'Additional body', moreLink: '#' },
      {
        title: `What's an accordion?`,
        body: `The accordion is a graphical control element comprising a vertically stacked list of items, such as tables
      or thumbnails. An accordion is similar in purpose to a tabbed interface, a list of items where exactly on
      item is expanded into a panel.`,
        moreLink: '#',
      },
      { title: 'When and how it should be used?', body: 'Additional body2', moreLink: '#' },
    ],
  };

  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <dialog className="accordion-container">
      <div className="header">
        <h2>{data.title}</h2>
        <h3>{data.subtitle}</h3>
      </div>
      <div className="body">
        {data.body.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <section className={isExpanded ? 'expanded' : ''} key={index}>
              <div
                className="body-title-container"
                onClick={() => {
                  if (index === expandedIndex) {
                    setExpandedIndex(null);
                  } else {
                    setExpandedIndex(index);
                  }
                }}>
                <span className="body-title">{item.title}</span>
                {isExpanded ? <span className="body-icon">—</span> : <span className="body-icon">+</span>}
              </div>
              {isExpanded && (
                <div className="body-container">
                  <span className="body">{item.body}</span>
                  <button>Read more</button>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </dialog>
  );
};

export default Accordion;
