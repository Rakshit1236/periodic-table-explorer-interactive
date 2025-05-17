
import React from 'react';
import { Element, getCategoryClass, getStateClass } from '../data/elements';

interface ElementTileProps {
  element: Element | null;
  onClick: (element: Element) => void;
}

const ElementTile: React.FC<ElementTileProps> = ({ element, onClick }) => {
  if (!element) {
    return <div className="element-tile empty-cell"></div>;
  }

  const categoryClass = getCategoryClass(element.category);
  const stateClass = getStateClass(element.state);

  return (
    <div 
      className={`element-tile ${categoryClass} ${stateClass}`} 
      onClick={() => onClick(element)}
    >
      <div className="text-xs absolute top-1 left-1">{element.atomicNumber}</div>
      <div className="text-lg font-bold">{element.symbol}</div>
      <div className="text-[10px] mt-1 truncate max-w-full">{element.name}</div>
    </div>
  );
};

export default ElementTile;
