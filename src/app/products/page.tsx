import { Metadata } from 'next';
import Link from 'next/link';
import { getProducts } from '@/lib/products';
import { ProductCard } from '@/components/Product';
import styles from './page.module.css';

type Props = {
  params: {
    id: string;
  };
};

// 60 sec ISR
export const revalidate = 60;

export default async function Page({ params }: Props) {
  const data = await getProducts();

  return (
    <div className={styles.list}>
      {
        data.products.map((product) => (
          <Link key={product.title} href={`/products/${product.id}`}>
            <ProductCard {...product} />
          </Link>
        ))
      }
    </div>
  );
}