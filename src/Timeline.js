import React from 'react'
import './Timeline.css'

function Timeline() {
  
  const magenta = [255, 0, 255]
  const xCount = 15
  const yCount = 9
  const maxVersionSize = 60

  return (
    <div className="timeline">
      {
        new Array(yCount).fill().map((item, i) => {
          return (
            <div className="line" key={`line ${i}`} style={{height: `${maxVersionSize}px`}}>
              {new Array(xCount).fill().map((item, j) => {
                const margin = j * 2
                return (
                  <div
                    className="version-container"
                    style={{
                      height: `${maxVersionSize}px`,
                      width: `${maxVersionSize}px`,
                    }}
                    key={`vc${i}${j}`}
                  >
                    <div 
                      className="version"
                      style={{
                        margin: `${margin}px ${margin}px ${margin}px 0`,
                        height: `${maxVersionSize - (j - 1) * 2}px`,
                        width: `${maxVersionSize}px`,
                        borderRadius: `${j * 5}%`,
                        backgroundColor: `rgb(
                          ${magenta[0]*(j / xCount)},
                          ${magenta[1]*(j / xCount)},
                          ${magenta[2]*(j / xCount)}
                        )`
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
