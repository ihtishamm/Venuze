import { type SearchContent, type SearchFilters } from '@/types/search';

export const searchContent: SearchContent = {
  keywordPlaceholder: 'Add keywords...',
  resultNoun: 'photo studios',
  sortLabel: 'Recommended',
  categories: [
    { id: 'all', label: 'All Spaces', iconKey: 'all' },
    { id: 'photo-studio', label: 'Photo Studio', iconKey: 'photo-studio' },
    { id: 'film-studio', label: 'Film Studio', iconKey: 'film-studio' },
    { id: 'warehouse', label: 'Warehouse', iconKey: 'warehouse' },
    { id: 'gallery', label: 'Gallery', iconKey: 'gallery' },
    { id: 'restaurant', label: 'Restaurant', iconKey: 'restaurant' },
    { id: 'apartment', label: 'Apartment', iconKey: 'apartment' },
    { id: 'office', label: 'Office Space', iconKey: 'office' },
    { id: 'venue', label: 'Venue', iconKey: 'venue' },
    { id: 'private-party', label: 'Private Party', iconKey: 'private-party' },
    { id: 'meeting', label: 'Meeting', iconKey: 'meeting' }
  ],
  filterChips: [
    { id: 'verified', label: 'Verified' },
    { id: 'area', label: '2,000+ m²' },
    { id: 'guests', label: '10-20 guests' },
    { id: 'parking', label: 'Parking' },
    { id: 'kitchen', label: 'Kitchen' }
  ],
  filterDrawer: {
    venueTypes: [
      'Office Space',
      'Meeting',
      'Private Party',
      'Villa',
      'Bar',
      'Loft',
      'Appartment',
      'Ballroom',
      'Restaurant',
      'Studio',
      'House',
      'Gallery'
    ],
    occasions: [
      'Wedding',
      'Reception',
      'Ceremony',
      'Engagement',
      'Birthday',
      'Babyshower',
      'Concert/Performance',
      'Brand Launch',
      'Fashion Show',
      'Corporate Event',
      'Conference',
      'Pop-up'
    ],
    capacity: { min: 10, max: 1500 },
    price: { min: 10, max: 30000 }
  },
  venues: [
    {
      id: 'sv-1',
      name: 'High-Spec Room in Trendy Home Clapham/ Stockwell',
      location: 'London, SW1',
      images: [
        '/venue_category_1.png',
        '/venue_category_2.png',
        '/venue_category_3.png'
      ],
      alt: 'Bright photo studio with natural light',
      verified: true,
      capacity: '300+',
      size: '2,000 sq ft',
      parking: 'Free parking',
      moreAmenities: 25,
      price: '$50',
      category: 'photo-studio',
      pin: { top: 52, left: 48 }
    },
    {
      id: 'sv-2',
      name: 'High-Spec Room in Trendy Home Clapham/ Stockwell',
      location: 'London, SW1',
      images: [
        '/venue_category_2.png',
        '/venue_category_3.png',
        '/venue_category_4.png'
      ],
      alt: 'Open-plan studio with professionals at a table',
      verified: true,
      capacity: '300+',
      size: '2,000 sq ft',
      parking: 'Free parking',
      moreAmenities: 25,
      price: '$50',
      category: 'photo-studio',
      pin: { top: 60, left: 58 }
    },
    {
      id: 'sv-3',
      name: 'Downtown Loft',
      location: 'New York, USA',
      images: [
        '/venue_category_3.png',
        '/venue_category_4.png',
        '/venue_category_1.png'
      ],
      alt: 'Downtown loft with film lighting rig',
      verified: true,
      capacity: '300+',
      size: '2,000 sq ft',
      parking: 'Free parking',
      moreAmenities: 25,
      price: '$50',
      category: 'film-studio',
      pin: { top: 56, left: 42 }
    },
    {
      id: 'sv-4',
      name: 'High-Spec Room in Trendy Home Clapham/ Stockwell',
      location: 'London, SW1',
      images: [
        '/venue_category_4.png',
        '/venue_category_1.png',
        '/venue_category_2.png'
      ],
      alt: 'Celebration space with festive lighting',
      verified: true,
      capacity: '300+',
      size: '2,000 sq ft',
      parking: 'Free parking',
      moreAmenities: 25,
      price: '$50',
      category: 'private-party',
      pin: { top: 64, left: 64 }
    },
    {
      id: 'sv-5',
      name: 'High-Spec Room in Trendy Home Clapham/ Stockwell',
      location: 'London, SW1',
      images: [
        '/venue_category_1.png',
        '/venue_category_3.png',
        '/venue_category_4.png'
      ],
      alt: 'Gallery space with white walls',
      verified: true,
      capacity: '300+',
      size: '2,000 sq ft',
      parking: 'Free parking',
      moreAmenities: 25,
      price: '$50',
      category: 'gallery',
      pin: { top: 68, left: 50 }
    },
    {
      id: 'sv-6',
      name: 'High-Spec Room in Trendy Home Clapham/ Stockwell',
      location: 'London, SW1',
      images: [
        '/venue_category_2.png',
        '/venue_category_4.png',
        '/venue_category_3.png'
      ],
      alt: 'Photographer working in a studio',
      verified: true,
      capacity: '300+',
      size: '2,000 sq ft',
      parking: 'Free parking',
      moreAmenities: 25,
      price: '$50',
      category: 'photo-studio',
      pin: { top: 58, left: 68 }
    },
    {
      id: 'sv-7',
      name: 'Riverside Warehouse Space',
      location: 'London, E1',
      images: [
        '/venue_category_3.png',
        '/venue_category_1.png',
        '/venue_category_2.png'
      ],
      alt: 'Industrial warehouse event space',
      verified: true,
      capacity: '500+',
      size: '4,000 sq ft',
      parking: 'Free parking',
      moreAmenities: 30,
      price: '$80',
      category: 'warehouse',
      pin: { top: 70, left: 40 }
    },
    {
      id: 'sv-8',
      name: 'Modern Restaurant Private Room',
      location: 'London, W1',
      images: [
        '/venue_category_4.png',
        '/venue_category_2.png',
        '/venue_category_1.png'
      ],
      alt: 'Private dining room in a restaurant',
      verified: true,
      capacity: '120+',
      size: '1,500 sq ft',
      parking: 'Free parking',
      moreAmenities: 18,
      price: '$45',
      category: 'restaurant',
      pin: { top: 50, left: 60 }
    }
  ]
};

/** Filters with every option cleared and both ranges at their full bounds. */
export function createDefaultFilters(): SearchFilters {
  const { capacity, price } = searchContent.filterDrawer;
  return {
    venueTypes: [],
    occasions: [],
    capacity: [capacity.min, capacity.max],
    price: [price.min, price.max],
    verifiedOnly: false
  };
}
