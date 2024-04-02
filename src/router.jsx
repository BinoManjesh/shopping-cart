import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./routes/root";
import Home from "./routes/home";
import Cart from "./routes/cart";
import Product from "./routes/product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index={true} element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="products/:productId" element={<Product />} />
    </Route>
  )
);

export default router;
