// inassist/src/components/PatternElements/ParallelogramPattern.jsx
import React from 'react';
import './ParallelogramPattern.css';

const ParallelogramPattern = ({ position }) => {
  const generatePattern = () => {
    const elements = [];
    
    // Увеличиваем количество элементов для большей плотности
    const gridSize = 10;
    
    // Создаем шахматный узор
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        // Правило шахматного расположения
        const isEvenRow = row % 2 === 0;
        const isEvenCol = col % 2 === 0;
        const isVisible = (isEvenRow && isEvenCol) || (!isEvenRow && !isEvenCol);
        
        // Модифицируем правило видимости для верхнего правого угла
        // Элементы будут располагаться больше вдоль верхней границы
        const isInRightPosition = position === 'top-right' 
          ? (row < 3 || col > gridSize - 4) // Показываем элементы вдоль верхней и правой границы
          : col <= row + 2; // Оставляем прежнюю логику для нижнего левого угла
        
        if (isVisible && isInRightPosition) {
          // Настраиваем градиент в зависимости от расстояния от угла
          let distanceFactor;
          if (position === 'top-right') {
            // Для верхнего правого: более темные элементы ближе к правому верхнему углу
            distanceFactor = Math.sqrt(Math.pow(row, 2) + Math.pow(gridSize - col - 1, 2));
          } else {
            // Для нижнего левого: более темные элементы ближе к левому нижнему углу
            distanceFactor = Math.sqrt(Math.pow(gridSize - row - 1, 2) + Math.pow(col, 2));
          }
          
          const maxDistance = Math.sqrt(2 * Math.pow(gridSize, 2));
          // Используем переменную для стилизации, которая будет определять насколько элемент близок к "светлому" концу
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
                  // Используем CSS переменные для цвета
                  // Коэффициент определяет степень "затухания" от темного к светлому
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