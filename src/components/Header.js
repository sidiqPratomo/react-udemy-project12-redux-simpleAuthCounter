import { authActions } from "../store/auth";
import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const loginhandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            {isAuth && <button onClick={logoutHandler}>Logout</button>}
            {!isAuth && <button onClick={loginhandler}>Login</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
