export enum ServiceCategory {
  WEDDING = 'Weddings',
  BABY = 'Babies',
  PORTRAIT = 'Portraits',
  STUDIO = 'Studio',
}

export interface Service {
  id: string;
  title: string;
  description: string;
  priceAnchor: string;
  icon: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  details: {
    hours: string;
    photos: string;
    album: boolean;
    delivery: string;
  };
}

export interface PortfolioItem {
  id: string;
  src: string;
  category: ServiceCategory;
  title: string;
  width: number;
  height: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}