import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import UserListingPage from '@/features/users/components/user-listing';

export const metadata = {
  title: 'Dashboard: Users'
};

export default function Page() {
  return (
    <PageContainer scrollable={false}>
      <div className='flex flex-1 flex-col space-y-4'>
        <div className='flex items-start justify-between'>
          <Heading
            title='Users'
            description='Manage users — search, view, create, edit and remove.'
          />
        </div>
        <Separator />
        <UserListingPage />
      </div>
    </PageContainer>
  );
}
