import { User as UserType } from '@/lib/users';
import styles from './user.module.css';

export function UserCard({
  username,
  uid,
  avatar,
}: UserType) {
  return (
    <div className={styles.card}>
      <figure>
        <img src={avatar} alt={username} />
      </figure>
      <div  className={styles.cardBody}>
        <div className={styles.cardTitle}>{username}</div>
        <p>{uid}</p>
      </div>
    </div>
  );
}

export function UserDetail({
  username,
  uid,
  email,
  avatar,
}: UserType) {
  return (
    <div className={styles.detail}>
      <figure className={styles.avatar}>
        <img src={avatar} alt={username} />
      </figure>
      <div  className={styles.detailBody}>
        <h1 className={styles.detailTitle}>{username}</h1>
        <p>{uid}</p>
        <code>{email}</code>
      </div>
    </div>
  );
}
