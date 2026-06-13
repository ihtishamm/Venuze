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

export interface SearchContent {
  categories: SpaceCategory[];
  filterChips: SearchFilterChip[];
  sortLabel: string;
  resultNoun: string;
  keywordPlaceholder: string;
  venues: SearchVenue[];
}
