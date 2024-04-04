import { Fragment } from "react";
import { useOutletContext } from "react-router-dom";
import Product from "../components/Product";
import CartManager from "../components/CartManager";
import styles from "../styles/cart.module.css";

function Cart() {
  const { cart, addToCart } = useOutletContext();
  let total = 0;
  return (
    <div className={styles.container}>
      <h2>Product</h2>
      <h2>Price</h2>
      <hr />
      {Array.from(cart.values()).map((value) => {
        const price = value.count * value.product.price;
        total += price;
        return (
          <Fragment key={value.product.id}>
            <Product product={value.product}>
              <CartManager
                cart={cart}
                addToCart={addToCart}
                product={value.product}
              />
            </Product>
            <p>$ {price}</p>
            <hr />
          </Fragment>
        );
      })}
      <h2>Total: </h2>
      <p>$ {total}</p>
    </div>
  );
}

export default Cart;
