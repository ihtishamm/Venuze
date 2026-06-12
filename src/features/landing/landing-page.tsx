import { FeaturedVenues } from './components/featured-venues';
import { Hero } from './components/hero';
import { VenueCategories } from './components/venue-categories';

export function LandingPage() {
  return (
    <>
      <Hero />
      <VenueCategories />
      <FeaturedVenues />
      {/* Upcoming sections go here */}
    </>
  );
}
