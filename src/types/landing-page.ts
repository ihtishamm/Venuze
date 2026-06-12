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

export interface LandingContent {
  navbar: NavbarContent;
  hero: HeroContent;
  venueCategories: VenueCategoriesContent;
  featuredVenues: FeaturedVenuesContent;
}
