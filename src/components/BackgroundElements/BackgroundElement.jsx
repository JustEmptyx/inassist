
import './BackgroundElement.css';

const BackgroundElement = () => {
  const generateElements = (count, side) => {
    const elements = [];
    
    for (let i = 0; i < count; i++) {
      const colorIndex = i % 5; 
      const colorClass = `color-${colorIndex}`;
      
      const rows = 10;
      const cols = Math.ceil(count / rows);
      const row = i % rows;
      const col = Math.floor(i / rows);
      
      const randomOffset = 5;
      const rowOffset = (Math.random() - 0.5) * randomOffset;
      const colOffset = (Math.random() - 0.5) * randomOffset;
      
      const top = (row / rows * 100) + rowOffset;
      
      const left = side === 'left' 
        ? (col / cols * 30) + colOffset
        : 70 + (col / cols * 30) + colOffset;
      
      const scale = 0.6 + Math.random() * 0.7; 
      const opacity = 0.6 + Math.random() * 0.4; 
      
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