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
  }
};
