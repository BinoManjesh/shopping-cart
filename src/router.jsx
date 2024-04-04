import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./routes/root";
import Home from "./routes/home";
import Cart from "./routes/cart";
import ErrorPage from "./routes/error-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index={true} element={<Home />} loader={Home.loader} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

export default router;
