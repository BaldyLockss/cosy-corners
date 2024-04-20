import { Link } from "react-router-dom";
import styles from "./shop.module.css";
const Shop = ({ shop }) => {
  return (
    <section className={styles.container}>
      <div className={styles.content__text}>
        <div className={styles.text}>
          <h2>
            <span className={styles.title__upper}>Checkout our</span>Latest
            <br />
            Product<span className={styles.title__lower}>Designs</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos fugiat
            ea itaque corporis consectetur hic quae sed, perferendis dignissimos
            eius!
          </p>
          <Link to="/" className={styles.button}>
            back
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Shop;
