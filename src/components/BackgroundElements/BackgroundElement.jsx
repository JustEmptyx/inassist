
import './BackgroundElement.css';

const BackgroundElement = () => {
  // Function to generate elements with more controlled positioning
  const generateElements = (count, side) => {
    const elements = [];
    
    for (let i = 0; i < count; i++) {
      // Distribute elements more evenly
      const colorIndex = i % 5; // Cycle through 5 color variations
      const colorClass = `color-${colorIndex}`;
      
      // Calculate position to distribute more evenly
      const rows = 10;
      const cols = Math.ceil(count / rows);
      const row = i % rows;
      const col = Math.floor(i / rows);
      
      // Add some randomness but keep within grid structure
      const randomOffset = 5;
      const rowOffset = (Math.random() - 0.5) * randomOffset;
      const colOffset = (Math.random() - 0.5) * randomOffset;
      
      const top = (row / rows * 100) + rowOffset;
      
      // Left side elements on the left 30%, right side elements on the right 30%
      const left = side === 'left' 
        ? (col / cols * 30) + colOffset
        : 70 + (col / cols * 30) + colOffset;
      
      const scale = 0.6 + Math.random() * 0.7; // Scale between 0.6 and 1.3
      const opacity = 0.6 + Math.random() * 0.4; // Opacity between 0.6 and 1
      
      elements.push(
        <div 
          className={`geo-element ${colorClass} ${side}`}
          key={`${side}-${i}`}
          style={{
            top: `${top}%`,
            left: `${left}%`,
            transform: `scale(${scale})`,
            opacity
          }}
        />
      );
    }
    
    return elements;
  };
  
  return (
    <div className="background-elements">
      {generateElements(25, 'left')}
      {generateElements(25, 'right')}
    </div>
  );
};

export default BackgroundElement;