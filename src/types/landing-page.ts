export type HeroTabIconKey = 'venue' | 'vendors';

export interface HeroTab {
  id: string;
  label: string;
  iconKey: HeroTabIconKey;
}

export interface HeroField {
  id: string;
  label: string;
  /** Pre-selected display value shown in the scaffold (real inputs wired later). */
  value: string;
}

export interface HeroContent {
  title: string;
  searchTabs: HeroTab[];
  searchFields: HeroField[];
  searchLabel: string;
  /** Number of carousel dots shown under the hero. */
  slideCount: number;
}

export interface NavbarContent {
  logo: { label: string };
  addListing: { label: string; href: string };
  language: { label: string };
}

export interface VenueCategory {
  id: string;
  name: string;
  venueCount: number;
  image: string;
  alt: string;
}

export interface VenueCategoriesContent {
  title: string;
  description: string;
  categories: VenueCategory[];
}

export interface FeaturedVenueCategory {
  id: string;
  label: string;
}

export interface FeaturedVenue {
  id: string;
  name: string;
  location: string;
  images: string[];
  alt: string;
  verified?: boolean;
  capacity: string;
  size: string;
  parking: string;
  moreAmenities?: number;
  price: string;
}

export interface FeaturedVenuesContent {
  title: string;
  categories: FeaturedVenueCategory[];
  venues: FeaturedVenue[];
}

export interface VendorCategory {
  id: string;
  name: string;
  image: string;
  alt: string;
}

export interface VendorCategoriesContent {
  title: string;
  description: string;
  categories: VendorCategory[];
}

export interface VendorCtaBannerContent {
  title: string;
  description: string;
  buttonLabel: string;
}

export interface PerfectVenueStep {
  number: number;
  title: string;
  description: string;
}

export interface PerfectVenuePathContent {
  title: string;
  description: string;
  steps: PerfectVenueStep[];
}

export interface TrustStat {
  id: string;
  value: string;
  label: string;
  /** Card background color. */
  color: string;
  /** Text color for the card. Defaults to white. */
  textColor?: string;
  /** Renders a trailing star glyph next to the value (e.g. rating). */
  showStar?: boolean;
}

export interface TrustReview {
  id: string;
  quote: string;
  name: string;
  image: string;
  alt: string;
}

export interface TrustedCreatorsContent {
  title: string;
  description: string;
  stats: TrustStat[];
  reviews: TrustReview[];
}

export interface LandingContent {
  navbar: NavbarContent;
  hero: HeroContent;
  venueCategories: VenueCategoriesContent;
  featuredVenues: FeaturedVenuesContent;
  vendorCategories: VendorCategoriesContent;
  vendorCtaBanner: VendorCtaBannerContent;
  perfectVenuePath: PerfectVenuePathContent;
  trustedCreators: TrustedCreatorsContent;
}
