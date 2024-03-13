import { Product as ProductType } from '@/lib/products';
import styles from './product.module.css';

export function ProductCard({
  title,
  description,
  openGraph,
}: ProductType) {
  return (
    <div className={styles.card}>
      <figure>
        <img src={openGraph.images[0]} alt={title} />
      </figure>
      <div  className={styles.cardBody}>
        <div className={styles.cardTitle}>{title}</div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export function ProductDetail({
  title,
  description,
  price,
  openGraph,
}: ProductType) {
  return (
    <div className={styles.detail}>
      <figure>
        <img src={openGraph.images[0]} alt={title} />
      </figure>
      <div  className={styles.detailBody}>
        <h1 className={styles.detailTitle}>{title}</h1>
        <p>{description}</p>
        <code>{`$${price}`}</code>
      </div>
    </div>
  );
}
