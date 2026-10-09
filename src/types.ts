export interface MenuItem {
  id: string;
  name: string;
  category: 'chops' | 'jollof' | 'platters' | 'combos';
  priceNgn: number;
  priceUsd: number;
  description: string;
  pieces: string;
  image: string;
  popular?: boolean;
  spicyLevel?: 'Mild' | 'Spicy' | 'Fire';
  ingredients: string[];
}

export interface CartItem {
  id: string;
  name: string;
  priceNgn: number;
  priceUsd: number;
  quantity: number;
  image?: string;
  customDetails?: string;
}

export interface CustomPlatterConfig {
  samosaCount: number;
  samosaType: 'Beef' | 'Vegetable';
  springRollCount: number;
  springRollType: 'Chicken' | 'Vegetable';
  puffPuffCount: number;
  puffPuffGlaze: 'Classic Golden' | 'Spicy Peppered';
  proteins: string[];
  sauces: string[];
}

export interface LagosZone {
  name: string;
  axis: string;
  estimatedTime: string;
  feeNgn: number;
}
