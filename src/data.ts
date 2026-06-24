import { Room, Review, GalleryItem } from './types';

export const roomsData: Room[] = [
  {
    id: 'executive-double',
    name: 'Executive Double Room',
    description: 'A beautifully furnished room featuring a premium double bed with custom greyish-blue headboard, red floral accents, clean tiled floors, and a modern bedside stand. Includes private attached bathroom, high-speed WiFi, and 24/7 service. Excellent choice for executive stays and short-term visits.',
    category: 'executive',
    capacity: '2 Adults, 1 Child',
    features: ['High-Speed WiFi', 'Attached Modern Bathroom', 'AC Option Available', 'Smart LED TV', 'Cozy Seating Area', '24/7 Room Service', 'Secure Parking'],
    priceShortStay: 3000,
    priceNight: 4000,
    price24Hours: 5000,
    hasAcOption: true,
    acExtraCharge: 1000,
    images: [
      'https://images.unsplash.com/photo-1611891404724-497bd63d79f5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80'
    ],
    totalRooms: 5,
    availableRooms: 3,
  },
  {
    id: 'luxury-suite',
    name: 'Luxury Suite Room',
    description: 'An ultra-premium master suite styled with high-back brick-patterned tufted headboard, premium mahogany furnishings, a private sitting desk, and an entertainment console. Features integrated air conditioning (included in the base price), luxurious bedding, superior privacy, and top-tier guest amenities.',
    category: 'suite',
    capacity: '2 Adults, 2 Children',
    features: ['Premium Air Conditioning (Included)', 'Elegant Sofa Seating', 'Executive Study Desk', 'Attached Luxury Bathroom', '43" LED Smart TV', 'Ultra High-Speed WiFi', 'Complimentary Tea/Coffee', 'Daily Housekeeping'],
    priceNight: 5000,
    price24Hours: 7000,
    hasAcOption: false,
    acExtraCharge: 0,
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    ],
    totalRooms: 3,
    availableRooms: 2,
  },
  {
    id: 'family-quad',
    name: 'Family Quad Room',
    description: 'Highly spacious multi-bed suite featuring premium tufted beige and majestic blue headboards, multiple double bed setups, spacious carpeted lounge area, and full access to our fully equipped guest kitchen. Specifically designed to provide complete comfort, security, and a home-like environment for families.',
    category: 'family',
    capacity: '4 Adults, 2 Children',
    features: ['Multiple Double Beds', 'Fully Equipped Kitchen Access', 'Spacious Sofa Lounge', 'Attached Luxury Bathroom', 'High-Speed WiFi', 'Smart LED TV with Netflix', 'Secure Family Environment', 'Secure Covered Parking'],
    priceNight: 7000,
    price24Hours: 9000,
    hasAcOption: true,
    acExtraCharge: 1000,
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80'
    ],
    totalRooms: 3,
    availableRooms: 1,
  }
];

export const reviewsData: Review[] = [
  {
    id: 'rev-1',
    name: 'Zahid Khan',
    rating: 5,
    text: 'Extremely clean and secure guest house for family stays. The location in Gulberg Residencia D Markaz is perfect—very peaceful yet close to market areas. Staff was exceptionally helpful, and the 24-hour service was spot on.',
    stayDate: 'June 2026',
    category: 'family',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Major Rizwan',
    rating: 5,
    text: 'Stayed in the Executive Double room. The furniture is high quality, bed is very comfortable, and the attached bathroom was sparkling clean. Highly recommend for business travels to Islamabad. Direct WhatsApp communication made booking very easy.',
    stayDate: 'May 2026',
    category: 'executive',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Aisha Malik',
    rating: 5,
    text: 'A clean, quiet, and absolutely safe environment for families. The kitchen access was a life-saver for cooking meals for the kids. Secure parking and constant hot water/WiFi. Shah G is now our permanent stay in Islamabad.',
    stayDate: 'June 2026',
    category: 'cleanliness',
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'Usman Ali',
    rating: 5,
    text: 'Excellent stay at great rates! Non-AC Executive stay for short time was very budget-friendly, and when we requested AC for the night, they added it seamlessly. Tiled floors and neat linens. Great hospitality!',
    stayDate: 'June 2026',
    category: 'executive',
    verified: true,
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    url: 'https://images.unsplash.com/photo-1611891404724-497bd63d79f5?auto=format&fit=crop&w=800&q=80',
    category: 'rooms',
    title: 'Executive Double Room - Bedding & Layout'
  },
  {
    id: 'gal-2',
    url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
    category: 'rooms',
    title: 'Luxury Suite - Master Double Setup'
  },
  {
    id: 'gal-3',
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    category: 'interior',
    title: 'Elegant Couch & Sitting Lounge'
  },
  {
    id: 'gal-4',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    category: 'bathrooms',
    title: 'Clean Modern Attached Bathroom'
  },
  {
    id: 'gal-5',
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    category: 'interior',
    title: 'Fully Furnished Shared Kitchen Access'
  },
  {
    id: 'gal-6',
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    category: 'exterior',
    title: 'Modern Arched Building Facade - D Markaz'
  },
  {
    id: 'gal-7',
    url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
    category: 'rooms',
    title: 'Family Quad Suite - Spacious Dual Bed Layout'
  },
  {
    id: 'gal-8',
    url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    category: 'interior',
    title: 'Executive Room Side Table & Desk Area'
  }
];

export const amenitiesList = [
  { id: 'wifi', label: 'High-Speed WiFi', description: 'Fiber internet connection covers all rooms.' },
  { id: 'ac', label: 'AC & Non-AC Rooms', description: 'Fully customizable cooling to suit your budget.' },
  { id: 'bath', label: 'Attached Bathrooms', description: 'Neat, tiled bathrooms with hot & cold water.' },
  { id: 'parking', label: 'Secure Parking', description: 'Gated parking with 24/7 CCTV vigilance.' },
  { id: 'service', label: '24/7 Hospitality', description: 'Helpful reception team available day and night.' },
  { id: 'tv', label: 'Smart LED TV', description: 'Loaded with entertainment and cable connections.' },
  { id: 'kitchen', label: 'Kitchen Access', description: 'Fully-equipped kitchen available for family meals.' },
  { id: 'location', label: 'Prime Location', description: 'Situated in the premium Gulberg Residencia, D Markaz.' }
];
