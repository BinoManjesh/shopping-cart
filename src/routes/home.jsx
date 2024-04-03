import { useLoaderData } from "react-router-dom";
import Product from "../components/Product";
import styles from "../styles/home.module.css";

Home.loader = async function () {
  return fetch("https://fakestoreapi.com/products");
};

function Home() {
  const items = useLoaderData();
  console.log(items);
  return (
    <div className={styles.container}>
      {items.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
