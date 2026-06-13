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
        image: '/caterers_1.png',
        alt: 'Catering setup with chafing dishes'
      },
      {
        id: 'decorators',
        name: 'Decorators',
        image: '/decorators_2.png',
        alt: 'Floral arch decoration for events'
      },
      {
        id: 'photographers',
        name: 'Photographers',
        image: '/photographers_3.png',
        alt: 'Photographer with professional camera'
      },
      {
        id: 'entertainment',
        name: 'Entertainment',
        image: '/entertainment_4.png',
        alt: 'Couple enjoying entertainment at a fair'
      },
      {
        id: 'florists',
        name: 'Florists',
        image: '/decorators_2.png',
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
        images: [
          '/venue_category_1.png',
          '/venue_category_2.png',
          '/venue_category_3.png'
        ],
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
        images: [
          '/venue_category_2.png',
          '/venue_category_3.png',
          '/venue_category_4.png'
        ],
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
        images: [
          '/venue_category_3.png',
          '/venue_category_4.png',
          '/venue_category_1.png'
        ],
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
        images: [
          '/venue_category_4.png',
          '/venue_category_1.png',
          '/venue_category_2.png'
        ],
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
        images: [
          '/venue_category_1.png',
          '/venue_category_3.png',
          '/venue_category_4.png'
        ],
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
        images: [
          '/venue_category_2.png',
          '/venue_category_4.png',
          '/venue_category_3.png'
        ],
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
  },
  trustedCreators: {
    title: 'Trusted by Event Creators Who Demand Excellence',
    description:
      'Join thousands of planners and hosts who love our seamless discovery and booking experience.',
    stats: [
      {
        id: 'venues',
        value: '1,500+',
        label: 'Venues Vetted & Approved',
        color: '#FF786A'
      },
      {
        id: 'events',
        value: '7,500+',
        label: 'Events Successfully Hosted',
        color: '#FF4F37'
      },
      {
        id: 'cities',
        value: '35+',
        label: 'Cities Across the Region',
        color: '#FE8B16'
      },
      {
        id: 'rating',
        value: '4.9',
        label: 'Average Host Rating',
        color: '#FEC432',
        textColor: '#000000',
        showStar: true
      }
    ],
    reviews: [
      {
        id: 'review-1',
        quote:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        name: 'Michael Carter',
        image: '/micheal.png',
        alt: 'Michael Carter'
      },
      {
        id: 'review-2',
        quote:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        name: 'by Ayesha M.',
        image: '/ayesha.png',
        alt: 'Ayesha M.'
      }
    ]
  },
  destinations: {
    title: 'Discover Exceptional Destinations Across the Region',
    description:
      'From cosmopolitan cityscapes to cultural treasures, explore where celebrations come alive with local flavor.',
    destinations: [
      {
        id: 'new-york',
        name: 'New York, USA',
        venueCount: 24,
        description: 'Coastal energy, modern Venue',
        popular: 'Popular: Rooftop',
        price: 'From $50 per hour',
        image: '/newyork.png',
        alt: 'New York skyline at golden hour'
      },
      {
        id: 'london',
        name: 'London, UK',
        venueCount: 108,
        description: 'Coastal energy, modern Venue',
        popular: 'Popular: Rooftop',
        price: 'From $25 per hour',
        image: '/london.png',
        alt: 'Tower Bridge in London'
      },
      {
        id: 'dubai',
        name: 'Dubai, UAE',
        venueCount: 17,
        description: 'Coastal energy, modern Venue',
        popular: 'Popular: Rooftop',
        price: 'From $50 per hour',
        image: '/dubai.png',
        alt: 'Atlantis resort on the Dubai coast'
      }
    ]
  },
  destinationCta: {
    title: 'Turn Your Venue into a Destination',
    description:
      'List your space on Venuze and unlock new revenue opportunities. Reach clients looking for venues just like yours.',
    buttonLabel: 'List Your Venue'
  },
  footer: {
    tagline:
      'Make it memorable—book the perfect venue and the pros who make it shine.',
    columns: [
      {
        title: 'Venuze',
        links: [
          { label: 'About', href: '#' },
          { label: 'News', href: '#' },
          { label: 'Careers', href: '#' },
          { label: 'Investors', href: '#' }
        ]
      },
      {
        title: 'Explore',
        links: [
          { label: 'Venue types', href: '#' },
          { label: 'Venue features', href: '#' },
          { label: 'Service options', href: '#' },
          { label: 'Locations', href: '#' }
        ]
      },
      {
        title: 'Support',
        links: [
          { label: 'Listings your venue', href: '#' },
          { label: 'Listing your service', href: '#' },
          { label: 'Help center', href: '#' },
          { label: 'FAQ', href: '#' }
        ]
      },
      {
        title: 'Legal & Privacy',
        links: [
          { label: 'Terms of service', href: '#' },
          { label: 'Payment & refund policy', href: '#' },
          { label: 'Host agreement', href: '#' },
          { label: 'Vendor agreement', href: '#' }
        ]
      }
    ],
    contact: {
      heading: 'Get in Touch',
      emailPlaceholder: 'Email Address',
      messagePlaceholder: 'Message',
      submitLabel: 'Send'
    },
    socials: [
      { id: 'x', label: 'X (Twitter)', href: '#' },
      { id: 'facebook', label: 'Facebook', href: '#' },
      { id: 'instagram', label: 'Instagram', href: '#' }
    ],
    copyright: '© 2026 Venuze. All rights reserved.'
  }
};
