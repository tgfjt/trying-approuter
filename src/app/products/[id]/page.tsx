import { Metadata } from 'next';
import { getDetail } from '@/lib/products';
import { ProductDetail } from '@/components/Product';

type Props = {
  params: {
    id: string;
  };
};

// dynamic rendering needs revalidate
export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return await getDetail(params.id);
}

export default async function Page({ params }: Props) {
  const data = await getDetail(params.id);

  return <ProductDetail {...data} />;
}