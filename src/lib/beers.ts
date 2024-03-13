const ENDPOINT = 'https://random-data-api.com/api/v2';

export type Beer = {
  id: string;
  brand: string;
  alcohol: string;
  hop: string;
  name: string;
  style: string;
  yeast: string;
};

export async function getBeers(): Promise<{ beers: Beer[] }> {
  const data = await fetch(`${ENDPOINT}/beers`).then((res) => res.json());

  return {
    beers: [data],
  }
}

export async function getBeerDetail(id: string): Promise<Beer> {
  const data = await fetch(`${ENDPOINT}/beers/${id}`).then((res) => res.json()).catch((err) => {});

  if (!data) {
    return await fetch(`${ENDPOINT}/beers/${id}`).then((res) => res.json()).catch((err) => {});
  }

  return data;
}
