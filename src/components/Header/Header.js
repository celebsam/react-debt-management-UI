import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../images/LOGO.png";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ signup, cart, bondOffer }) => {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/">
          <img src={Logo} alt="debt management office nigeria" />
        </Link>
      </nav>
      <ul>
        <li
          style={bondOffer ? { fontWeight: "bold" } : { fontWeight: "unset" }}
        >
          <Link to="/bond-offer">Bond offer</Link>
        </li>
        <li>{cart ? "Portfolio" : "DMO"}</li>
        <li>{cart ? "Notification" : "Features"}</li>
        {cart ? (
          <li>
            <FiUser />
          </li>
        ) : (
          <li className={styles.login}>Login</li>
        )}
        {signup || cart ? null : (
          <li className={styles.signUp}>
            <Link to="/signup">Sign Up</Link>
          </li>
        )}

        <li className={styles.cart}>
          <Link to="/cart">
            <FiShoppingCart size="1.6em" />
          </Link>
          <small>2</small>
        </li>
      </ul>
      <div className={styles.hamburger}>
        <GiHamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
