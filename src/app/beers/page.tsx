import Link from 'next/link';
import { getBeers } from '@/lib/beers';
import { BeerCard } from '@/components/Beer';
import styles from './page.module.css';

type Props = {
  params: {
    id: string;
  };
};

export const fetchCache = 'default-no-store';

export default async function Page({ params }: Props) {
  const data = await getBeers();

  return (
    <div className={styles.list}>
      {
        data.beers.map((u) => (
          <Link key={u.id} href={`/beers/${u.id}`}>
            <BeerCard {...u} />
          </Link>
        ))
      }
    </div>
  );
}