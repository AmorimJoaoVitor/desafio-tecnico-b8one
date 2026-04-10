import type { Product } from "../types/Product"

import img1 from "../assets/images/camiseta-basica.webp"
import img2 from "../assets/images/tenis-esportivo.webp"
import img3 from "../assets/images/relogio-digital.webp"
import img4 from "../assets/images/mochila.webp"
import img5 from "../assets/images/jaqueta.jpg"
import img6 from "../assets/images/oculos-de-sol.webp"

export const products: Product[] = [
  {
    id: 1,
    title: "Camiseta Básica",
    price: 59.9,
    image: img1
  },
  {
    id: 2,
    title: "Tênis Esportivo",
    price: 199.9,
    image: img2
  },
  {
    id: 3,
    title: "Relógio Digital",
    price: 149.9,
    image: img3
  },
  {
    id: 4,
    title: "Mochila",
    price: 89.9,
    image: img4
  },
  {
    id: 5,
    title: "Jaqueta",
    price: 249.9,
    image: img5
  },
  {
    id: 6,
    title: "Óculos de Sol",
    price: 79.9,
    image: img6
  }
]