import { type LandingContent } from '@/types/landing-page';

/**
 * Single source of truth for all landing-page copy.
 * Components never hardcode strings — they read from here.
 */
export const landingContent: LandingContent = {
  navbar: {
    logo: { label: 'venuze' },
    addListing: { label: 'Add your listing', href: '#' },
    language: { label: 'EN' }
  },
  hero: {
    title: 'Celebrate in venues big and small',
    searchTabs: [
      { id: 'venue', label: 'Venue', iconKey: 'venue' },
      { id: 'vendors', label: 'Vendors', iconKey: 'vendors' }
    ],
    searchFields: [
      { id: 'where', label: 'Where', value: 'Dubai, UAE' },
      { id: 'when', label: 'When', value: 'Anytime' },
      { id: 'guests', label: 'Guests', value: '10-20' }
    ],
    searchLabel: 'Search',
    slideCount: 4
  },
  venueCategories: {
    title: 'Find The Best Venue For Any Occasion',
    description:
      'Explore venues by category, from timeless ballrooms and rooftops with a view to modern studios and outdoor gardens, discover spaces designed to inspire unforgettable experiences.',
    categories: [
      {
        id: 'celebration',
        name: 'Celebration Venues',
        venueCount: 37,
        image: '/venue_category_1.png',
        alt: 'Celebration venue with festive lighting'
      },
      {
        id: 'private-party',
        name: 'Private Party Venues',
        venueCount: 37,
        image: '/venue_category_2.png',
        alt: 'Elegant private party venue with candle lighting'
      },
      {
        id: 'corporate',
        name: 'Corporate Meetings',
        venueCount: 37,
        image: '/venue_category_3.png',
        alt: 'Corporate meeting room with professionals'
      },
      {
        id: 'creative',
        name: 'Creative Studios',
        venueCount: 37,
        image: '/venue_category_4.png',
        alt: 'Creative studio with professional equipment'
      },
      {
        id: 'outdoor',
        name: 'Outdoor Gardens',
        venueCount: 24,
        image: '/venue_category_1.png',
        alt: 'Lush outdoor garden venue'
      }
    ]
  },
  featuredVenues: {
    title: 'Featured Venues',
    categories: [
      { id: 'rooftop', label: 'Rooftop' },
      { id: 'gallery', label: 'Gallery' },
      { id: 'restaurant', label: 'Restaurant' },
      { id: 'outdoor', label: 'Outdoor' },
      { id: 'studio', label: 'Studio' },
      { id: 'terrace', label: 'Terrace' },
      { id: 'ballroom', label: 'Ballroom' }
    ],
    venues: [
      {
        id: 'fv-1',
        name: 'High-Spec Room in Trendy Home Clapham/ Stockwell',
        location: 'London, SW1',
        images: ['/venue_category_1.png', '/venue_category_2.png', '/venue_category_3.png'],
        alt: 'Celebration venue with festive lighting',
        verified: true,
        capacity: '300+',
        size: '2,000 sq ft',
        parking: 'Free parking',
        moreAmenities: 25,
        price: '$50'
      },
      {
        id: 'fv-2',
        name: 'High-Spec Room in Trendy Home Clapham/ Stockwell',
        location: 'London, SW1',
        images: ['/venue_category_2.png', '/venue_category_3.png', '/venue_category_4.png'],
        alt: 'Private party venue with candle lighting',
        verified: true,
        capacity: '300+',
        size: '2,020 sq ft',
        parking: 'Free parking',
        moreAmenities: 35,
        price: '$50'
      },
      {
        id: 'fv-3',
        name: 'High-Spec Room in Trendy Home Clapham/ Stockwell',
        location: 'London, SW1',
        images: ['/venue_category_3.png', '/venue_category_4.png', '/venue_category_1.png'],
        alt: 'Corporate meeting room with professionals',
        verified: true,
        capacity: '300+',
        size: '3,000 sq ft',
        parking: 'Free parking',
        moreAmenities: 25,
        price: '$50'
      },
      {
        id: 'fv-4',
        name: 'High-Spec Room in Trendy Home Clapham/ Stockwell',
        location: 'London, SW1',
        images: ['/venue_category_4.png', '/venue_category_1.png', '/venue_category_2.png'],
        alt: 'Creative studio with professional equipment',
        verified: true,
        capacity: '300+',
        size: '2,200 sq ft',
        parking: 'Free parking',
        moreAmenities: 25,
        price: '$50'
      },
      {
        id: 'fv-5',
        name: 'High-Spec Room in Trendy Home Clapham/ Stockwell',
        location: 'London, SW1',
        images: ['/venue_category_1.png', '/venue_category_3.png', '/venue_category_4.png'],
        alt: 'Rooftop venue with city views',
        verified: true,
        capacity: '200+',
        size: '1,800 sq ft',
        parking: 'Free parking',
        moreAmenities: 20,
        price: '$60'
      },
      {
        id: 'fv-6',
        name: 'High-Spec Room in Trendy Home Clapham/ Stockwell',
        location: 'London, SW1',
        images: ['/venue_category_2.png', '/venue_category_4.png', '/venue_category_3.png'],
        alt: 'Elegant ballroom venue',
        verified: true,
        capacity: '500+',
        size: '4,000 sq ft',
        parking: 'Free parking',
        moreAmenities: 30,
        price: '$80'
      }
    ]
  }
};
