import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "../styles/root.module.css";
import CartIcon from "../assets/cart.svg";

function Root() {
  const [cart] = useState(new Map());
  let numItems = 0;
  for (const [, value] of cart) {
    numItems += value;
  }
  return (
    <>
      <nav className={styles.header}>
        <Link to="." className={styles.logo} aria-label="Home page">
          <img src="/icon.png" alt="Website logo" />
        </Link>
        <Link to="cart" className={styles.cart} aria-label="Shopping cart">
          <img src={CartIcon} alt="" />
        </Link>
        <p data-testid="cart-size">{numItems}</p>
      </nav>
      <Outlet />
    </>
  );
}

export default Root;
