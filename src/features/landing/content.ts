import { type LandingContent } from '../../types/landing-page';

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
  }
};
