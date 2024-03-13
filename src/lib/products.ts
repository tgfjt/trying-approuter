const ENDPOINT = 'https://dummyjson.com';

export async function getProducts(): Promise<{ products: Product[] }> {
  const data = await fetch(`${ENDPOINT}/products`).then((res) => res.json());

  return {
    ...data,
    products: data.products.map((item: any) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price,
      openGraph: {
        title: item.title,
        description: item.description,
        images: [item?.thumbnail || ''],
      },
    }))
  }
}

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  openGraph: {
    title: string;
    description: string;
    images: string[];
  }
};

export async function getDetail(id: string): Promise<Product> {
  const data = await fetch(`${ENDPOINT}/products/${id}`).then((res) => res.json());

  return {
    id: data.id,
    title: data.title,
    description: data.description,
    price: data.price,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail || ''],
    },
  };
}