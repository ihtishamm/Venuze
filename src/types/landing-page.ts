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

export interface LandingContent {
  navbar: NavbarContent;
  hero: HeroContent;
}
