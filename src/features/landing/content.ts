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
  vendorCategories: {
    title: 'Complete Your Event with our Trusted Vendors',
    description:
      'Venues are just the beginning. Discover caterers, decorators, photographers, entertainment, and more all in one place, ready to bring your event project to life.',
    categories: [
      {
        id: 'caterers',
        name: 'Caterers',
        image: '/caterer.png',
        alt: 'Catering setup with chafing dishes'
      },
      {
        id: 'decorators',
        name: 'Decorators',
        image: '/decorators.png',
        alt: 'Floral arch decoration for events'
      },
      {
        id: 'photographers',
        name: 'Photographers',
        image: '/photographers.png',
        alt: 'Photographer with professional camera'
      },
      {
        id: 'entertainment',
        name: 'Entertainment',
        image: '/entertainment.png',
        alt: 'Couple enjoying entertainment at a fair'
      },
      {
        id: 'florists',
        name: 'Florists',
        image: '/caterer.png',
        alt: 'Elegant floral arrangements for events'
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
  },
  vendorCtaBanner: {
    title: 'Grow Your Business with Venuze',
    description:
      'Showcase your services to thousands of event organizers and creators searching for talent like yours.',
    buttonLabel: 'Join as a Vendor'
  },
  perfectVenuePath: {
    title: 'Your Path to the Perfect Venue',
    description:
      "Planning an event, production, or gathering shouldn't feel complicated. Our streamlined process connects you with the right venues and trusted professionals, taking the stress out of logistics so you can focus on what matters most — making it a success.",
    steps: [
      {
        number: 1,
        title: 'Search & filter',
        description:
          'Browse our curated collection of venues and event professionals. Use smart filters, high-quality visuals, and authentic reviews to find options that fit your needs, style, and budget.'
      },
      {
        number: 2,
        title: 'Compare & message',
        description:
          'Communicate directly with venue hosts and service providers. Request tailored quotes, discuss requirements, and design every detail of your event or project with confidence.'
      },
      {
        number: 3,
        title: 'Book & add services',
        description:
          'Secure your choices with ease through our protected booking system. With clear agreements, secure payments, and ongoing support, you can move forward knowing everything is handled.'
      }
    ]
  }
};
