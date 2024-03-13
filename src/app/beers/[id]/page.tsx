import { Metadata } from 'next';
import { getBeerDetail } from '@/lib/beers';
import { BeerDetail } from '@/components/Beer';

type Props = {
  params: {
    id: string;
  };
};

export const fetchCache = 'default-no-store';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const b = await getBeerDetail(params.id);

  return {
    title: b ? b.name : 'Beer',
  }
}

export default async function Page({ params }: Props) {
  const data = await getBeerDetail(params.id);

  return <BeerDetail {...data} />;
}