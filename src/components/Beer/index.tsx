import { Beer as BeerType } from '@/lib/beers';
import styles from './beer.module.css';

export function BeerCard({
  name,
  brand,
  alcohol,
}: BeerType) {
  return (
    <div className={styles.card}>
      <div  className={styles.cardBody}>
        <div className={styles.cardTitle}>{name}</div>
        <span>{brand}</span>
        <code>{`alcohol: ${alcohol}`}</code>
      </div>
    </div>
  );
}

export function BeerDetail({
  name,
  style,
  yeast,
  brand,
  alcohol,
  hop,
}: BeerType) {
  return (
    <div className={styles.detail}>
      <div  className={styles.detailBody}>
        <h1 className={styles.detailTitle}>{name}</h1>
        <span>{brand}</span>
        <code>{`alcohol: ${alcohol}`}</code>
        <span>{hop}</span>
        <code>{`yeast: ${yeast}`}</code>
        <span>{style}</span>
      </div>
    </div>
  );
}
