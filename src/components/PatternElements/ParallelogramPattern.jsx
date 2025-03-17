// inassist/src/components/PatternElements/ParallelogramPattern.jsx
import React from 'react';
import './ParallelogramPattern.css';

const ParallelogramPattern = ({ position }) => {
  const generatePattern = () => {
    const elements = [];
    
    const gridSize = 10;
    
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const isEvenRow = row % 2 === 0;
        const isEvenCol = col % 2 === 0;
        const isVisible = (isEvenRow && isEvenCol) || (!isEvenRow && !isEvenCol);
        
        const isInRightPosition = position === 'top-right' 
          ? (row < 3 || col > gridSize - 4) 
          : col <= row + 2;
        
        if (isVisible && isInRightPosition) {

          let distanceFactor;
          if (position === 'top-right') {

            distanceFactor = Math.sqrt(Math.pow(row, 2) + Math.pow(gridSize - col - 1, 2));
          } else {

            distanceFactor = Math.sqrt(Math.pow(gridSize - row - 1, 2) + Math.pow(col, 2));
          }
          
          const maxDistance = Math.sqrt(2 * Math.pow(gridSize, 2));

          const colorIntensity = distanceFactor / maxDistance;
          
          const isFlipped = row % 2 !== 0;

          elements.push(
            <div 
              key={`${position}-${row}-${col}`}
              className="pattern-cell"
              style={{
                gridRow: row + 1,
                gridColumn: col + 1
              }}
            >
              <div 
                className={`parallelogram ${position}`}
                style={{

                  backgroundColor: colorIntensity < 0.55 
                    ? 'var(--color-dark-navy)' 
                    : 'var(--color-navy50)',
                  opacity: colorIntensity < 0.52 ? 0.7 - colorIntensity : 0.5 - (colorIntensity - 0.5) * 0.7
                }}
              />
            </div>
          );
        }
      }
    }
    
    return elements;
  };
  
  return (
    <div className={`parallelogram-pattern ${position}`}>
      {generatePattern()}
    </div>
  );
};

export default ParallelogramPattern;