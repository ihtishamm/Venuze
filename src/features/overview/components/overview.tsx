import PageContainer from '@/components/layout/page-container';
import { PopularVenues } from './popular-venues';
import { RecentBookings } from './recent-bookings';
import { StatCards } from './stat-cards';
import { WelcomeBanner } from './welcome-banner';

/**
 * Dashboard overview for the Venuze host workspace. A Server Component that
 * composes the static sections; only the greeting (which reads the persisted
 * auth store) is a Client Component.
 */
export default function Overview() {
  return (
    <PageContainer>
      <div className='flex flex-1 flex-col gap-6'>
        <WelcomeBanner />
        <StatCards />
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
          <div className='lg:col-span-4'>
            <RecentBookings />
          </div>
          <div className='lg:col-span-3'>
            <PopularVenues />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
