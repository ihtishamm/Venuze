import { Destinations } from './components/destinations';
import { FeaturedVenues } from './components/featured-venues';
import { Hero } from './components/hero';
import { PerfectVenuePath } from './components/perfect-venue-path';
import { VenueCategories } from './components/venue-categories';
import { TrustedCreators } from './components/trusted-creators';
import { VendorCategories } from './components/vendor-categories';
import { VendorCtaBanner } from './components/vendor-cta-banner';

export function LandingPage() {
  return (
    <>
      <Hero />
      <VenueCategories />
      <FeaturedVenues />
      <VendorCategories />
      <VendorCtaBanner />
      <PerfectVenuePath />
      <TrustedCreators />
      <Destinations />
    </>
  );
}
