import styles from "./header.module.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/svgs/logo";
import Basket from "../../assets/svgs/basket";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.container__logo}>
        <Link to="/">
          <div className={styles.logo}>
            <Logo />
            <p>
              Cosy
              <br />
              Corners
            </p>
          </div>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/checkout">
              <div className={styles.basket}>
                <Basket />
                <div className={styles.number}>
                  <p>0</p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
