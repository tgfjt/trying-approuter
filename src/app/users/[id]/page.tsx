import { Metadata } from 'next';
import { getUserDetail } from '@/lib/users';
import { UserDetail } from '@/components/User';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await getUserDetail(params.id);

  return {
    title: user.username,
  }
}

export default async function Page({ params }: Props) {
  const data = await getUserDetail(params.id);

  return <UserDetail {...data} />;
}