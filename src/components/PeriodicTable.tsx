
import React, { useState, useMemo } from 'react';
import { Element, tableStructure } from '../data/elements';
import ElementTile from './ElementTile';
import FilterControls from './FilterControls';
import Legend from './Legend';

const PeriodicTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSelectedState(null);
  };
  
  const filteredTable = useMemo(() => {
    return tableStructure.map(row => 
      row.map(element => {
        if (!element) return null;
        
        // Apply search filter
        const matchesSearch = searchQuery === '' || 
          element.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          element.symbol.toLowerCase().includes(searchQuery.toLowerCase());
        
        // Apply category filter
        const matchesCategory = selectedCategory === null || 
          element.category === selectedCategory;
        
        // Apply state filter
        const matchesState = selectedState === null || 
          element.state === selectedState;
        
        return matchesSearch && matchesCategory && matchesState ? element : null;
      })
    );
  }, [searchQuery, selectedCategory, selectedState]);

  return (
    <div className="container mx-auto px-4 py-8">
      <FilterControls 
        onSearchChange={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        onStateChange={setSelectedState}
        onReset={handleResetFilters}
        activeCategory={selectedCategory}
        activeState={selectedState}
      />
      
      <div className="max-w-full overflow-x-auto pb-6">
        <div className="inline-grid grid-cols-18 gap-1" style={{ gridTemplateColumns: 'repeat(18, minmax(50px, 1fr))' }}>
          {/* Table Headers - Groups */}
          {Array.from({ length: 18 }, (_, i) => (
            <div key={`group-${i + 1}`} className="text-center text-xs font-medium py-1">
              {i + 1}
            </div>
          ))}
          
          {/* Table Rows */}
          {filteredTable.map((row, rowIndex) => {
            // Skip empty rows
            if (row.every(cell => cell === null)) return null;
            
            return (
              <React.Fragment key={`row-${rowIndex}`}>
                {/* Period number */}
                {rowIndex < 7 && (
                  <div className="row-span-1 flex items-center justify-center font-medium" 
                       style={{ gridColumn: '1', gridRow: `${rowIndex + 2}` }}>
                    {rowIndex + 1}
                  </div>
                )}
                
                {/* Elements in the row */}
                {row.map((element, colIndex) => (
                  <div 
                    key={`cell-${rowIndex}-${colIndex}`}
                    style={{ 
                      gridColumn: colIndex === 0 ? '2' : (colIndex + 1).toString(),
                      gridRow: (rowIndex + 2).toString()
                    }}
                  >
                    <ElementTile element={element} />
                  </div>
                ))}
              </React.Fragment>
            );
          })}
          
          {/* Lanthanides Label - Row 8 */}
          <div className="text-center text-xs font-medium py-1" 
               style={{ gridColumn: '3', gridRow: '8' }}>
            Lanthanides
          </div>
          
          {/* Actinides Label - Row 9 */}
          <div className="text-center text-xs font-medium py-1" 
               style={{ gridColumn: '3', gridRow: '9' }}>
            Actinides
          </div>
        </div>
      </div>
      
      <Legend />
    </div>
  );
};

export default PeriodicTable;
