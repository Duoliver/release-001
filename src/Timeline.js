import React from 'react';
import './Timeline.css';

function Timeline() {
  return (
    <div className="timeline">
      {
        new Array(6).fill().map((item, i) => {
          return (
            <div className="line" key={`line ${i}`}>
              {new Array(12).fill().map((item, j) => {
                return <div className="version" key={`v${i}${j}`}/>
              })}
            </div>
          )
        })
      }
    </div>
  );
}

export default Timeline;
