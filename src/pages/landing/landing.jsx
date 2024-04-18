import styles from "./landing.module.css";

import Button from "../../components/button/button";

const Landing = () => {
  const sayHello = () => {
    alert("hello from button");
  };
  return (
    <section className={styles.container}>
      <img src={require("../../assets/images/hero.jpg")} alt="background" />
      <div className={styles.content}>
        <div className={styles.content__text}>
          <div className={styles.text__wrapper}>
            <div className={styles.text}>
              <h1>
                <span className={styles.title__upper}>
                  <span>Calling</span>Unique
                </span>
                <br />
                <span className={styles.title__lower}>
                  Design<span> Enthusiasts</span>
                </span>
              </h1>
              <p>
                Boutique-style shop, specializing in homely items <br />
                that add warmth and comfort to any space.
              </p>
              <Button text="see more" onClick={sayHello} />
            </div>
          </div>
        </div>
        <div className={styles.content__img}></div>
      </div>
    </section>
  );
};
export default Landing;
