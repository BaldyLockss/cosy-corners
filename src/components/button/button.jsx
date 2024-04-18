import styles from "./button.module.css";
import ButtonIcon from "../../assets/svgs/button";

const Button = ({ onClick, text }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <ButtonIcon />
      <div>
        <p>{text}</p>
      </div>
    </button>
  );
};

export default Button;
