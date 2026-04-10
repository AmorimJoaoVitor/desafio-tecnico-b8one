import { products } from "../data/products"
import type { Product } from "../types/Product"

export async function getProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 300)
  })
}