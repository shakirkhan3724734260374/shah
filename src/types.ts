export interface Room {
  id: string;
  name: string;
  description: string;
  category: 'executive' | 'suite' | 'family';
  capacity: string;
  features: string[];
  priceNight: number;
  price24Hours: number;
  priceShortStay?: number; // non-ac short stay for executive double
  hasAcOption: boolean;
  acExtraCharge: number;
  images: string[];
  totalRooms: number;
  availableRooms: number;
}

export interface BookingState {
  selectedRoomId: string;
  checkIn: string;
  checkOut: string;
  guestName: string;
  guestPhone: string;
  totalGuests: number;
  roomCount: number;
  useAc: boolean;
  stayType: 'short' | 'night' | '24hours';
  specialRequests: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  stayDate: string;
  category: 'family' | 'executive' | 'cleanliness';
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: 'rooms' | 'interior' | 'bathrooms' | 'exterior';
  title: string;
}
