
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Search, Filter } from 'lucide-react';
import { categories } from '../data/elements';

interface FilterControlsProps {
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: string | null) => void;
  onStateChange: (state: string | null) => void;
  onReset: () => void;
  activeCategory: string | null;
  activeState: string | null;
}

const FilterControls: React.FC<FilterControlsProps> = ({ 
  onSearchChange, 
  onCategoryChange, 
  onStateChange, 
  onReset,
  activeCategory,
  activeState
}) => {
  return (
    <div className="mb-6 space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder="Search elements..."
          className="pl-10"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div className="flex flex-wrap gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Category {activeCategory ? `(${activeCategory})` : ''}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              {categories.map((category) => (
                <DropdownMenuItem key={category} onClick={() => onCategoryChange(category)}>
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>State {activeState ? `(${activeState})` : ''}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => onStateChange("solid")}>Solid</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onStateChange("liquid")}>Liquid</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onStateChange("gas")}>Gas</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Button variant="secondary" onClick={onReset}>
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterControls;
