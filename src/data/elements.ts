
export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: number;
  electronicConfiguration: string;
  category: string;
  group: number | null;
  period: number;
  block: string;
  state: "solid" | "liquid" | "gas" | "unknown";
  discoveryYear: number | null;
  discoverer: string | null;
  uses: string;
  row: number; // For positioning in the table
  column: number; // For positioning in the table
}

export const categories = [
  "alkali metal",
  "alkaline earth metal",
  "transition metal",
  "post-transition metal",
  "metalloid",
  "nonmetal",
  "halogen",
  "noble gas",
  "lanthanide",
  "actinide"
];

export const elements: Element[] = [
  {
    atomicNumber: 1,
    symbol: "H",
    name: "Hydrogen",
    atomicMass: 1.008,
    electronicConfiguration: "1s¹",
    category: "nonmetal",
    group: 1,
    period: 1,
    block: "s",
    state: "gas",
    discoveryYear: 1766,
    discoverer: "Henry Cavendish",
    uses: "Fuel, production of ammonia and methanol",
    row: 1,
    column: 1
  },
  {
    atomicNumber: 2,
    symbol: "He",
    name: "Helium",
    atomicMass: 4.0026,
    electronicConfiguration: "1s²",
    category: "noble gas",
    group: 18,
    period: 1,
    block: "s",
    state: "gas",
    discoveryYear: 1868,
    discoverer: "Pierre Janssen",
    uses: "Balloons, cooling MRI machines, as a protective gas",
    row: 1,
    column: 18
  },
  {
    atomicNumber: 3,
    symbol: "Li",
    name: "Lithium",
    atomicMass: 6.94,
    electronicConfiguration: "[He]2s¹",
    category: "alkali metal",
    group: 1,
    period: 2,
    block: "s",
    state: "solid",
    discoveryYear: 1817,
    discoverer: "Johan August Arfwedson",
    uses: "Batteries, mood stabilizing drugs, nuclear fusion",
    row: 2,
    column: 1
  },
  {
    atomicNumber: 4,
    symbol: "Be",
    name: "Beryllium",
    atomicMass: 9.0122,
    electronicConfiguration: "[He]2s²",
    category: "alkaline earth metal",
    group: 2,
    period: 2,
    block: "s",
    state: "solid",
    discoveryYear: 1798,
    discoverer: "Louis-Nicolas Vauquelin",
    uses: "Spacecraft, missiles, aircraft",
    row: 2,
    column: 2
  },
  {
    atomicNumber: 5,
    symbol: "B",
    name: "Boron",
    atomicMass: 10.81,
    electronicConfiguration: "[He]2s²2p¹",
    category: "metalloid",
    group: 13,
    period: 2,
    block: "p",
    state: "solid",
    discoveryYear: 1808,
    discoverer: "Joseph Louis Gay-Lussac",
    uses: "Borax, semiconductors, boronic acids",
    row: 2,
    column: 13
  },
  {
    atomicNumber: 6,
    symbol: "C",
    name: "Carbon",
    atomicMass: 12.011,
    electronicConfiguration: "[He]2s²2p²",
    category: "nonmetal",
    group: 14,
    period: 2,
    block: "p",
    state: "solid",
    discoveryYear: null,
    discoverer: "Known since ancient times",
    uses: "All organic compounds, steel production, diamonds",
    row: 2,
    column: 14
  },
  {
    atomicNumber: 7,
    symbol: "N",
    name: "Nitrogen",
    atomicMass: 14.007,
    electronicConfiguration: "[He]2s²2p³",
    category: "nonmetal",
    group: 15,
    period: 2,
    block: "p",
    state: "gas",
    discoveryYear: 1772,
    discoverer: "Daniel Rutherford",
    uses: "Fertilizers, explosives, refrigerant",
    row: 2,
    column: 15
  },
  {
    atomicNumber: 8,
    symbol: "O",
    name: "Oxygen",
    atomicMass: 15.999,
    electronicConfiguration: "[He]2s²2p⁴",
    category: "nonmetal",
    group: 16,
    period: 2,
    block: "p",
    state: "gas",
    discoveryYear: 1774,
    discoverer: "Joseph Priestley",
    uses: "Respiration, combustion, steel production",
    row: 2,
    column: 16
  },
  {
    atomicNumber: 9,
    symbol: "F",
    name: "Fluorine",
    atomicMass: 18.998,
    electronicConfiguration: "[He]2s²2p⁵",
    category: "halogen",
    group: 17,
    period: 2,
    block: "p",
    state: "gas",
    discoveryYear: 1886,
    discoverer: "Henri Moissan",
    uses: "Toothpaste, refrigerants, teflon",
    row: 2,
    column: 17
  },
  {
    atomicNumber: 10,
    symbol: "Ne",
    name: "Neon",
    atomicMass: 20.18,
    electronicConfiguration: "[He]2s²2p⁶",
    category: "noble gas",
    group: 18,
    period: 2,
    block: "p",
    state: "gas",
    discoveryYear: 1898,
    discoverer: "William Ramsay",
    uses: "Neon signs, lasers, refrigerants",
    row: 2,
    column: 18
  },
  
  // For brevity, we'll add a few more elements. In a real application, you'd include all 118.
  // Adding 3rd row elements
  {
    atomicNumber: 11,
    symbol: "Na",
    name: "Sodium",
    atomicMass: 22.99,
    electronicConfiguration: "[Ne]3s¹",
    category: "alkali metal",
    group: 1,
    period: 3,
    block: "s",
    state: "solid",
    discoveryYear: 1807,
    discoverer: "Humphry Davy",
    uses: "Salt, sodium vapor lamps, nuclear reactors",
    row: 3,
    column: 1
  },
  {
    atomicNumber: 12,
    symbol: "Mg",
    name: "Magnesium",
    atomicMass: 24.305,
    electronicConfiguration: "[Ne]3s²",
    category: "alkaline earth metal",
    group: 2,
    period: 3,
    block: "s",
    state: "solid",
    discoveryYear: 1755,
    discoverer: "Joseph Black",
    uses: "Alloys, pyrotechnics, medicine",
    row: 3,
    column: 2
  },
  {
    atomicNumber: 13,
    symbol: "Al",
    name: "Aluminum",
    atomicMass: 26.982,
    electronicConfiguration: "[Ne]3s²3p¹",
    category: "post-transition metal",
    group: 13,
    period: 3,
    block: "p",
    state: "solid",
    discoveryYear: 1825,
    discoverer: "Hans Christian Ørsted",
    uses: "Construction, transportation, packaging",
    row: 3,
    column: 13
  },
  
  // Adding a few representative elements for different categories
  {
    atomicNumber: 26,
    symbol: "Fe",
    name: "Iron",
    atomicMass: 55.845,
    electronicConfiguration: "[Ar]3d⁶4s²",
    category: "transition metal",
    group: 8,
    period: 4,
    block: "d",
    state: "solid",
    discoveryYear: null,
    discoverer: "Known since ancient times",
    uses: "Steel production, construction, tools",
    row: 4,
    column: 8
  },
  {
    atomicNumber: 80,
    symbol: "Hg",
    name: "Mercury",
    atomicMass: 200.59,
    electronicConfiguration: "[Xe]4f¹⁴5d¹⁰6s²",
    category: "transition metal",
    group: 12,
    period: 6,
    block: "d",
    state: "liquid",
    discoveryYear: null,
    discoverer: "Known since ancient times",
    uses: "Thermometers, fluorescent lamps, batteries",
    row: 6,
    column: 12
  },
  {
    atomicNumber: 57,
    symbol: "La",
    name: "Lanthanum",
    atomicMass: 138.91,
    electronicConfiguration: "[Xe]5d¹6s²",
    category: "lanthanide",
    group: 3,
    period: 6,
    block: "f",
    state: "solid",
    discoveryYear: 1839,
    discoverer: "Carl Gustaf Mosander",
    uses: "Hydrogen storage, batteries, catalysts",
    row: 8,
    column: 3
  },
  {
    atomicNumber: 89,
    symbol: "Ac",
    name: "Actinium",
    atomicMass: 227,
    electronicConfiguration: "[Rn]6d¹7s²",
    category: "actinide",
    group: 3,
    period: 7,
    block: "f",
    state: "solid",
    discoveryYear: 1899,
    discoverer: "André-Louis Debierne",
    uses: "Neutron sources, medicine",
    row: 9,
    column: 3
  },
  {
    atomicNumber: 94,
    symbol: "Pu",
    name: "Plutonium",
    atomicMass: 244,
    electronicConfiguration: "[Rn]5f⁶7s²",
    category: "actinide",
    group: null,
    period: 7,
    block: "f",
    state: "solid",
    discoveryYear: 1940,
    discoverer: "Glenn T. Seaborg",
    uses: "Nuclear weapons, spacecraft power sources",
    row: 9,
    column: 8
  }
];

// Helper function to get category class name
export const getCategoryClass = (category: string): string => {
  const classMap: Record<string, string> = {
    "alkali metal": "alkali-metal",
    "alkaline earth metal": "alkaline-earth-metal",
    "transition metal": "transition-metal",
    "post-transition metal": "post-transition-metal",
    "metalloid": "metalloid",
    "nonmetal": "nonmetal",
    "halogen": "halogen",
    "noble gas": "noble-gas",
    "lanthanide": "lanthanide",
    "actinide": "actinide"
  };
  
  return classMap[category] || "";
};

// Helper function to get state class name
export const getStateClass = (state: string): string => {
  const classMap: Record<string, string> = {
    "solid": "solid-state",
    "liquid": "liquid-state",
    "gas": "gas-state",
    "unknown": ""
  };
  
  return classMap[state] || "";
};

// Full table structure with empty positions
export const tableStructure = Array(10).fill(null).map(() => 
  Array(18).fill(null)
);

// Populate table structure with elements
elements.forEach(element => {
  const { row, column } = element;
  if (row <= 10 && column <= 18) {
    tableStructure[row - 1][column - 1] = element;
  }
});
