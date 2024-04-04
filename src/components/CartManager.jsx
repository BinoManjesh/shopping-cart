import PropTypes from "prop-types";
import styles from "../styles/CartManager.module.css";

CartManager.propTypes = {
  cart: PropTypes.instanceOf(Map),
  addToCart: PropTypes.func,
  product: PropTypes.shape({
    id: PropTypes.number,
  }),
};

function CartManager({ cart, addToCart, product }) {
  return (
    <>
      <div className={styles.controls}>
        <button onClick={() => addToCart(product, 1)}>+</button>
        <p>{(cart.get(product.id) || { count: 0 }).count}</p>
        <button onClick={() => addToCart(product, -1)}>-</button>
      </div>
    </>
  );
}

export default CartManager;
