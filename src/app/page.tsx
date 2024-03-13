import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by App Router
        </p>
      </div>

      <div className={styles.grid}>
        <Link
          href="/products"
          className={styles.card}
        >
          <h2>
            Products <span>-&gt;</span>
          </h2>
          <p>Using Server Components with revalidate value.</p>
        </Link>

        <Link
          href="/users"
          className={styles.card}
        >
          <h2>
            Users <span>-&gt;</span>
          </h2>
          <p>Using Server Components with no revalidate.</p>
        </Link>

        <Link
          href="/beers"
          className={styles.card}
        >
          <h2>
            Beers <span>-&gt;</span>
          </h2>
          <p>Using Server Components with Dynamic Functions via default-no-store.</p>
        </Link>

        <Link
          href="/client/products"
          className={styles.card}
        >
          <h2>
            use Client Products <span>-&gt;</span>
          </h2>
          <p>Using Client Component with browser fetch.</p>
        </Link>
      </div>
    </main>
  );
}
