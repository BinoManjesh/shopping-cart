import PropTypes from "prop-types";
import styles from "../styles/CartManager.module.css";

CartManager.propTypes = {
  cart: PropTypes.instanceOf(Map),
  setCart: PropTypes.func,
  productId: PropTypes.number,
};

function CartManager({ cart, setCart, productId }) {
  function addToCart(increment) {
    setCart((cart) => {
      const newCart = new Map(cart);
      newCart.set(productId, (cart.get(productId) || 0) + increment);
      if (newCart.get(productId) <= 0) {
        newCart.delete(productId);
      }
      return newCart;
    });
  }

  return (
    <>
      <div className={styles.controls}>
        <button onClick={() => addToCart(1)}>+</button>
        <p>{cart.get(productId) || 0}</p>
        <button onClick={() => addToCart(-1)}>-</button>
      </div>
    </>
  );
}

export default CartManager;
