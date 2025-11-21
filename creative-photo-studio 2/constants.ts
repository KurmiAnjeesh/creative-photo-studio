import { ServiceCategory, Service, PricingTier, PortfolioItem, Testimonial, FaqItem, TeamMember } from './types';

export const WHATSAPP_NUMBER = "919876543210"; // Placeholder number
export const ADDRESS_LINE = "Creative Photo Studio • Shop no 8, Muktajivan Complex, Ghodasar, Ahmedabad";
export const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.865824648644!2d72.601!3d22.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85c!2sGhodasar%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin";

export const NAVIGATION_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'wedding',
    title: 'Wedding & Pre-Wedding',
    description: 'Capture the romance and grandeur of your special day. We focus on candid moments and cinematic styling.',
    priceAnchor: '₹12,999',
    icon: 'Heart',
  },
  {
    id: 'baby',
    title: 'Baby & Milestone',
    description: 'Adorable setups for newborns and toddlers. We ensure a safe, warm environment to capture those fleeting first smiles.',
    priceAnchor: '₹1,999',
    icon: 'Baby',
  },
  {
    id: 'portrait',
    title: 'Studio Portraits',
    description: 'Professional headshots and creative portraits using high-end lighting equipment for a polished, modern look.',
    priceAnchor: '₹1,999',
    icon: 'Camera',
  },
  {
    id: 'event',
    title: 'Event Coverage',
    description: 'From birthdays to corporate gatherings, we document every detail so you can enjoy the moment.',
    priceAnchor: 'Custom',
    icon: 'Calendar',
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '₹1,999',
    description: 'Perfect for quick portraits or milestone updates.',
    features: [
      '1 hour studio shoot',
      '10 edited photos',
      'Online gallery',
      'Print release',
    ],
    details: {
      hours: '1 Hour',
      photos: '10 Edited',
      album: false,
      delivery: '7 Days',
    },
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '₹4,499',
    description: 'Our most popular package for families and couples.',
    features: [
      '2 hour shoot',
      '25 edited photos',
      'Printed Album (Small)',
      '2 outfit changes',
    ],
    highlight: true,
    details: {
      hours: '2 Hours',
      photos: '25 Edited',
      album: true,
      delivery: '10 Days',
    },
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '₹12,999',
    description: 'Full coverage for weddings and large events.',
    features: [
      'Full-day wedding coverage',
      '200 edited photos',
      'Luxury Premium Album',
      'Drone shots included',
    ],
    details: {
      hours: 'Full Day (8-10h)',
      photos: '200+ Edited',
      album: true,
      delivery: '3-4 Weeks',
    },
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: '1', src: 'https://picsum.photos/800/1200?random=1', category: ServiceCategory.WEDDING, title: 'Anita & Raj — Pre-wedding, Ahmedabad', width: 800, height: 1200 },
  { id: '2', src: 'https://picsum.photos/800/600?random=2', category: ServiceCategory.BABY, title: 'Aarav’s 1st Birthday', width: 800, height: 600 },
  { id: '3', src: 'https://picsum.photos/800/800?random=3', category: ServiceCategory.PORTRAIT, title: 'Studio Fashion Session', width: 800, height: 800 },
  { id: '4', src: 'https://picsum.photos/800/1000?random=4', category: ServiceCategory.WEDDING, title: 'Royal Rajasthan Wedding', width: 800, height: 1000 },
  { id: '5', src: 'https://picsum.photos/800/800?random=5', category: ServiceCategory.STUDIO, title: 'Professional Headshots', width: 800, height: 800 },
  { id: '6', src: 'https://picsum.photos/800/1200?random=6', category: ServiceCategory.BABY, title: 'Newborn Dream Session', width: 800, height: 1200 },
  { id: '7', src: 'https://picsum.photos/800/600?random=7', category: ServiceCategory.PORTRAIT, title: 'Outdoor Candid', width: 800, height: 600 },
  { id: '8', src: 'https://picsum.photos/800/1000?random=8', category: ServiceCategory.WEDDING, title: 'Haldi Ceremony Moments', width: 800, height: 1000 },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Priya Patel', role: 'Bride', quote: "The team was invisible yet everywhere. The candid shots from our wedding are absolutely breathtaking.", rating: 5 },
  { id: '2', name: 'Rahul Mehta', role: 'Business Owner', quote: "Professional, fast, and the lighting in my headshots is perfect. Highly recommended.", rating: 5 },
  { id: '3', name: 'Sneha Desai', role: 'Mother', quote: "They were so patient with my newborn. The photos are memories we will cherish forever.", rating: 5 },
];

export const FAQS: FaqItem[] = [
  { question: "How long until we get our photos?", answer: "For studio and portrait shoots: 7–10 business days. For weddings: 3–4 weeks depending on edits and album design." },
  { question: "Are raw files included?", answer: "We provide fully edited high-resolution photos. Raw files can be provided on request for an additional fee." },
  { question: "What is the booking deposit?", answer: "We require a 30% deposit to secure your date, with the remainder due on the day of the shoot." },
  { question: "Do you travel outside Ahmedabad?", answer: "Yes! We love destination weddings. Travel and accommodation charges apply for locations outside the city." },
  { question: "What if we need to reschedule?", answer: "We understand life happens. You can reschedule once with at least 48 hours notice without penalty." },
  { question: "Do you provide hair and makeup?", answer: "We have a list of trusted partners we can recommend, but it is not included in the base package." },
  { question: "Can we customize a package?", answer: "Absolutely. Message us on WhatsApp and we can create a custom quote based on your specific needs." },
  { question: "Is the studio open on weekends?", answer: "Yes, we are open 7 days a week from 10:00 AM to 8:00 PM." },
];

export const TEAM: TeamMember[] = [
  { name: "Vikram Singh", role: "Lead Photographer", bio: "Over 10 years of experience capturing timeless weddings.", image: "https://picsum.photos/300/300?random=20" },
  { name: "Neha Gupta", role: "Studio Manager", bio: "Ensures your booking and album design process is seamless.", image: "https://picsum.photos/300/300?random=21" },
  { name: "Arjun Kumar", role: "Editor & Retoucher", bio: "The wizard behind the warm, cinematic color grade.", image: "https://picsum.photos/300/300?random=22" },
];