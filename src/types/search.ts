import { type FeaturedVenue } from './landing-page';

/** Icon keys for the space-category strip — components own the lucide icons. */
export type SpaceCategoryIconKey =
  | 'all'
  | 'photo-studio'
  | 'film-studio'
  | 'warehouse'
  | 'gallery'
  | 'restaurant'
  | 'apartment'
  | 'office'
  | 'venue'
  | 'private-party'
  | 'meeting';

export interface SpaceCategory {
  id: string;
  label: string;
  iconKey: SpaceCategoryIconKey;
}

/** A pill shown under the result count (e.g. Verified, Parking, Kitchen). */
export interface SearchFilterChip {
  id: string;
  label: string;
}

export interface SearchVenue extends FeaturedVenue {
  category: string;

  pin: { top: number; left: number };
}

export interface SearchSummary {
  where: string;
  when: string;
  guests: string;
}

/** Inclusive numeric bounds for a range slider. */
export interface RangeBounds {
  min: number;
  max: number;
}

/** Option lists and bounds that populate the filter drawer. */
export interface FilterDrawerContent {
  venueTypes: string[];
  occasions: string[];
  capacity: RangeBounds;
  price: RangeBounds;
}

/** The user's currently applied search filters. */
export interface SearchFilters {
  venueTypes: string[];
  occasions: string[];
  capacity: [number, number];
  price: [number, number];
  verifiedOnly: boolean;
}

export interface SearchContent {
  categories: SpaceCategory[];
  filterChips: SearchFilterChip[];
  filterDrawer: FilterDrawerContent;
  sortLabel: string;
  resultNoun: string;
  keywordPlaceholder: string;
  venues: SearchVenue[];
}
