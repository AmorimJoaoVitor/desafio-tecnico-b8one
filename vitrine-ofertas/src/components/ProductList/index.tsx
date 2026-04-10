import { useEffect, useState } from "react"
import { getProducts } from "../../services/api"
import type { Product } from "../../types/Product"
import { ProductCard } from "../ProductCard"
import styles from "./styles.module.scss"

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  async function loadProducts() {
    const data = await getProducts()
    setProducts(data)
    setLoading(false)
  }

  loadProducts()
}, [])

  if (loading) return <p>Carregando...</p>

  return (
    <div className={styles.grid}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}