import { useState } from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";
import styles from "../styles/root.module.css";
import CartIcon from "../assets/cart.svg";
import Loader from "../components/Loader";

function Root() {
  const navigation = useNavigation();
  const [cart, setCart] = useState(new Map());

  function addToCart(product, increment) {
    setCart((cart) => {
      const newCart = new Map(cart);
      newCart.set(product.id, {
        count: (cart.get(product.id) || { count: 0 }).count + increment,
        product,
      });
      if (newCart.get(product.id).count <= 0) {
        newCart.delete(product.id);
      }
      return newCart;
    });
  }

  let numItems = 0;
  for (const [, value] of cart) {
    numItems += value.count;
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
      {navigation.state === "loading" ? (
        <Loader />
      ) : (
        <Outlet context={{ cart, addToCart }} />
      )}
    </>
  );
}

export default Root;
