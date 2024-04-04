import { useLoaderData, useOutletContext } from "react-router-dom";
import Product from "../components/Product";
import styles from "../styles/home.module.css";
import CartManager from "../components/CartManager";

Home.loader = async function () {
  return fetch("https://fakestoreapi.com/products");
};

function Home() {
  const items = useLoaderData();
  const { cart, setCart } = useOutletContext();
  return (
    <div className={styles.container}>
      {items.map((product) => (
        <Product key={product.id} product={product}>
          <CartManager cart={cart} setCart={setCart} productId={product.id} />
        </Product>
      ))}
    </div>
  );
}

export default Home;
