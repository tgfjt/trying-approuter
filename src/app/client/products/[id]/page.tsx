'use client';

import { Suspense, use } from 'react';
import { Metadata } from 'next';
import { getDetail } from '@/lib/products';
import { ProductDetail } from '@/components/Product';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return await getDetail(params.id);
}

function ClientProduct({ id }: { id: string }) {
  const data = use(getDetail(id));

  if (!data) return;

  return <ProductDetail {...data} />;
}


export default function Page({ params }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientProduct id={params.id} />;
    </Suspense>
  )
}