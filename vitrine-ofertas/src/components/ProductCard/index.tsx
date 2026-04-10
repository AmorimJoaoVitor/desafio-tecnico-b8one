import type { Product } from "../../types/Product"
import styles from "./styles.module.scss"

type Props = {
  product: Product
}

export function ProductCard({ product }: Props) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />

      <h2>{product.title}</h2>

      <p className={styles.price}>
        R$ {product.price.toFixed(2)}
      </p>

      <button>Comprar</button>
    </div>
  )
}