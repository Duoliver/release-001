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
                const margin = j * 2
                return (
                  <div
                    className="version-container"
                    key={`vc${i}${j}`}
                  >
                    <div 
                      className="version"
                      style={{
                        margin: `${margin}px ${margin}px ${margin}px 0`,
                        height: `${50 - (j - 1) * 2}px`,
                        borderRadius: `${j * 5}%`
                      }}
                      key={`v${i}${j}`}
                    />
                  </div>
                )
              })}
            </div>
          )
        })
      }
    </div>
  );
}

export default Timeline;
