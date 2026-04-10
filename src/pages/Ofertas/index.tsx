import { Banner } from "../../components/Banner"
import { ProductList } from "../../components/ProductList"
import styles from "./styles.module.scss"

export function Ofertas() {
  return (
    <div className={styles.container}>
      <Banner />
      <h1 className="main-title">Ofertas da Semana</h1>
      <ProductList />
    </div>
  )
}