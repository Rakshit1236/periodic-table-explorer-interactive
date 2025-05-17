
import React from 'react';

const Legend: React.FC = () => {
  const categories = [
    { name: "Alkali Metal", class: "alkali-metal" },
    { name: "Alkaline Earth Metal", class: "alkaline-earth-metal" },
    { name: "Transition Metal", class: "transition-metal" },
    { name: "Post-Transition Metal", class: "post-transition-metal" },
    { name: "Metalloid", class: "metalloid" },
    { name: "Nonmetal", class: "nonmetal" },
    { name: "Halogen", class: "halogen" },
    { name: "Noble Gas", class: "noble-gas" },
    { name: "Lanthanide", class: "lanthanide" },
    { name: "Actinide", class: "actinide" }
  ];

  const states = [
    { name: "Solid", class: "solid-state" },
    { name: "Liquid", class: "liquid-state", extra: "Ring indicator" },
    { name: "Gas", class: "gas-state", extra: "Ring indicator" }
  ];

  return (
    <div className="mt-8 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg shadow-sm border">
      <h2 className="text-xl font-bold mb-4">Legend</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium mb-2">Element Categories</h3>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <div key={category.name} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded ${category.class}`}></div>
                <span className="text-sm">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">States of Matter</h3>
          <div className="space-y-2">
            {states.map((state) => (
              <div key={state.name} className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded bg-gray-200 ${state.class}`}></div>
                <span className="text-sm">{state.name} {state.extra && `(${state.extra})`}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legend;
