
import React, { useState } from 'react';
import { Element, getCategoryClass, getStateClass } from '../data/elements';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import ElementDetails from './ElementDetails';

interface ElementTileProps {
  element: Element | null;
}

const ElementTile: React.FC<ElementTileProps> = ({ element }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  if (!element) {
    return <div className="element-tile empty-cell"></div>;
  }

  const categoryClass = getCategoryClass(element.category);
  const stateClass = getStateClass(element.state);

  return (
    <TooltipProvider>
      <Tooltip open={showDetails} onOpenChange={setShowDetails}>
        <TooltipTrigger asChild>
          <div 
            className={`element-tile ${categoryClass} ${stateClass}`}
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
          >
            <div className="text-xs absolute top-1 left-1">{element.atomicNumber}</div>
            <div className="text-lg font-bold">{element.symbol}</div>
            <div className="text-[10px] mt-1 truncate max-w-full">{element.name}</div>
          </div>
        </TooltipTrigger>
        {element && <ElementDetails element={element} />}
      </Tooltip>
    </TooltipProvider>
  );
};

export default ElementTile;
