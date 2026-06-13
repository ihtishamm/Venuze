import { SearchPage } from '@/features/search/search-page';
import { type SearchSummary } from '@/types/search';

export const metadata = {
  title: 'Venuze — Search venues'
};

/** Fallbacks when a field is missing from the URL (e.g. direct navigation). */
const defaults: SearchSummary = {
  where: 'London, UK',
  when: 'Anytime',
  guests: '10-20'
};

export default async function Page({
  searchParams
}: {
  searchParams: Promise<{ where?: string; when?: string; guests?: string }>;
}) {
  const params = await searchParams;

  const summary: SearchSummary = {
    where: params.where || defaults.where,
    when: params.when || defaults.when,
    guests: params.guests || defaults.guests
  };

  return <SearchPage summary={summary} />;
}
