import { Navbar } from '@/features/landing/components/navbar';

export default function PublicLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative h-screen overflow-x-hidden overflow-y-auto'>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
