export enum Category {
  CLEANSE = 'Limpieza y Desintoxicación',
  REGENERATE = 'Regeneración y Nutrición',
  IMMUNE = 'Sistema Inmunológico',
  WEIGHT = 'Control de Peso',
  ANTI_AGE = 'Anti-Edad',
  MENTAL = 'Vigor Mental',
  SPORT = 'Rendimiento Deportivo',
  PACKS = 'Packs'
}

export interface ProductPrice {
  large?: number; // Usually 28 sticks or 14 sticks depending on product
  small?: number; // Usually 7 sticks or 20 sticks
  pack?: number;  // For bundles
  labelLarge?: string;
  labelSmall?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  flavor: string;
  category: Category;
  prices: ProductPrice;
  registrationCode?: string;
  benefits: string[];
  color: string; // Hex code for card accent
  image: string; // Path to asset
  nutritionalTable?: string; // URL to nutritional table image
  video?: string; // URL to video
  
  // New fields for AI Knowledge Base
  ingredients?: string;
  preparation?: string;
  weight?: string;
  extraInfo?: string;
}