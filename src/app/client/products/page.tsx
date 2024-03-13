'use client';

import { Suspense, use } from 'react';
import Link from 'next/link';
import { getProducts } from '@/lib/products';
import { ProductCard } from '@/components/Product';
import styles from './page.module.css';

function ClientProducs() {
  const data = use(getProducts());

  if (!data) return;

  return (
    <>
      {
        data.products.map((product) => (
          <Link key={product.title} href={`/products/${product.id}`}>
            <ProductCard {...product} />
          </Link>
        ))
      }
    </>
  )
}

export default function Page() {
  return (
    <div className={styles.list}>
      <Suspense fallback={<div>Loading...</div>}>
        <ClientProducs />
      </Suspense>
    </div>
  );
}