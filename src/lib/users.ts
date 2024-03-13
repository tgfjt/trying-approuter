const ENDPOINT = 'https://random-data-api.com/api/v2';

export type User = {
  id: string;
  uid: string;
  username: string;
  email: string;
  avatar: string;
};

export async function getUsers(): Promise<{ users: User[] }> {
  const data = await fetch(`${ENDPOINT}/users`).then((res) => res.json());

  return {
    users: [data],
  }
}

export async function getUserDetail(id: string): Promise<User> {
  const data = await fetch(`${ENDPOINT}/users/${id}`).then((res) => res.json()).catch((err) => {});

  if (!data) {
    return await fetch(`${ENDPOINT}/users/${id}`).then((res) => res.json()).catch((err) => {});
  }

  return data;
}
