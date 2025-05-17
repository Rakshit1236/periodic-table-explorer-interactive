
import React from 'react';
import { Element } from '../data/elements';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

interface ElementDetailsProps {
  element: Element;
}

const ElementDetails: React.FC<ElementDetailsProps> = ({ element }) => {
  // Create a visual representation of the electron configuration
  const renderElectronConfig = () => {
    return (
      <div className="flex flex-wrap justify-center gap-1 mt-2">
        {element.electronicConfiguration.split(/(\d+|\s+|[a-z]+)/).filter(Boolean).map((part, index) => {
          // Handle superscripts and orbital labels
          if (part.match(/\d+/)) {
            return <span key={index} className="relative text-sm"><sup>{part}</sup></span>;
          } else if (part.match(/[spdf]/)) {
            return <span key={index} className="font-bold animate-pulse">{part}</span>;
          } else {
            return <span key={index}>{part}</span>;
          }
        })}
      </div>
    );
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipContent side="right" className="element-tooltip w-80">
          <Card className="border-0 shadow-lg animate-fade-in">
            <CardHeader className="p-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2 mb-0">
                    {element.name}
                    <span className="text-base font-normal text-gray-500">{element.symbol}</span>
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Atomic Number: {element.atomicNumber} | Mass: {element.atomicMass}
                  </CardDescription>
                </div>
                <div className={`w-3 h-3 rounded-full ${getStateColor(element.state)}`} />
              </div>
            </CardHeader>

            <CardContent className="p-3 pt-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="config">
                  <AccordionTrigger className="py-1 text-sm">Electronic Configuration</AccordionTrigger>
                  <AccordionContent className="animate-in slide-in-from-left-1">
                    {renderElectronConfig()}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="properties">
                  <AccordionTrigger className="py-1 text-sm">Properties</AccordionTrigger>
                  <AccordionContent className="animate-in slide-in-from-left-2">
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      <div>Category:</div>
                      <div>{element.category}</div>
                      <div>State:</div>
                      <div>{element.state}</div>
                      <div>Period:</div>
                      <div>{element.period}</div>
                      <div>Group:</div>
                      <div>{element.group || 'N/A'}</div>
                      <div>Block:</div>
                      <div>{element.block}</div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="history">
                  <AccordionTrigger className="py-1 text-sm">Discovery</AccordionTrigger>
                  <AccordionContent className="animate-in slide-in-from-left-3">
                    <div className="text-xs space-y-1">
                      <p>Discovered: {element.discoveryYear ? `${element.discoveryYear}` : 'Ancient times'}</p>
                      <p>Discoverer: {element.discoverer || 'Unknown'}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="uses">
                  <AccordionTrigger className="py-1 text-sm">Uses</AccordionTrigger>
                  <AccordionContent className="animate-in slide-in-from-left-4">
                    <p className="text-xs">{element.uses}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

// Helper function to get state color
const getStateColor = (state: string): string => {
  switch (state) {
    case 'solid':
      return 'bg-gray-600';
    case 'liquid':
      return 'bg-blue-500';
    case 'gas':
      return 'bg-green-500';
    default:
      return 'bg-purple-500';
  }
};

export default ElementDetails;
