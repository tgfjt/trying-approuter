import Link from 'next/link';
import { getUsers } from '@/lib/users';
import { UserCard } from '@/components/User';
import styles from './page.module.css';

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getUsers();

  return (
    <div className={styles.list}>
      {
        data.users.map((u) => (
          <Link key={u.uid} href={`/users/${u.id}`}>
            <UserCard {...u} />
          </Link>
        ))
      }
    </div>
  );
}