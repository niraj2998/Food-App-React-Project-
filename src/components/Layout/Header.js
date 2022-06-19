import mealsImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCardButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delecious dishes" />
      </div>
    </>
  );
};

export default Header;
