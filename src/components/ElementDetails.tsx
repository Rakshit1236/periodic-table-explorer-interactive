
import React from 'react';
import { Element } from '../data/elements';
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

interface ElementDetailsProps {
  element: Element;
  onClose: () => void;
}

const ElementDetails: React.FC<ElementDetailsProps> = ({ element, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="element-details fade-in" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <span>{element.name}</span>
              <span className="text-2xl text-gray-500">{element.symbol}</span>
            </h2>
            <p className="text-lg text-gray-500">Atomic Number: {element.atomicNumber}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-lg mb-2">Properties</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Atomic Mass:</span> {element.atomicMass} u</p>
              <p><span className="font-medium">Category:</span> {element.category}</p>
              <p><span className="font-medium">State at Room Temperature:</span> {element.state}</p>
              <p><span className="font-medium">Period:</span> {element.period}</p>
              <p><span className="font-medium">Group:</span> {element.group || 'N/A'}</p>
              <p><span className="font-medium">Block:</span> {element.block}</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-2">Electronic & History</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Electronic Configuration:</span> {element.electronicConfiguration}</p>
              <p>
                <span className="font-medium">Discovery:</span> {element.discoveryYear ? `${element.discoveryYear}` : 'Ancient times'}
              </p>
              <p><span className="font-medium">Discoverer:</span> {element.discoverer || 'Unknown'}</p>
              <p><span className="font-medium">Common Uses:</span> {element.uses}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementDetails;
