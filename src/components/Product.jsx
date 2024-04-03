import { shape, string, number } from "prop-types";
import styles from "../styles/Product.module.css";

Product.propTypes = {
  product: shape({
    title: string,
    price: number,
    image: string,
    rating: shape({
      rate: number,
      count: number,
    }),
  }),
};

function Product({ product }) {
  return (
    <div className={styles.product}>
      <img className={styles.img} src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>
        {product.rating.rate}
        <span className={styles.star}>★</span> ({product.rating.count})
      </p>
      <p>$ {product.price}</p>
    </div>
  );
}

export default Product;
