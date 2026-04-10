import styles from "./styles.module.scss"
import banner from "../../assets/images/banner_novidades.jpg"

export function Banner() {
  return (
    <div className={styles.banner}>
      <img src={banner} alt="Banner de Novidades" />
    </div>
  )
}