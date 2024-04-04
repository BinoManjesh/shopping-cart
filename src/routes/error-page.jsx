import { Link, useRouteError } from "react-router-dom";
import styles from "../styles/ErrorPage.module.css";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className={styles.errorPage}>
      <h1>Sorry, an unexpected error has occurred.</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Go to home page</Link>
    </div>
  );
}

export default ErrorPage;
