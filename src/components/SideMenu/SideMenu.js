import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Coat_of_arms_of_Nigeria.svg.png";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { BsArrowLeftShort } from "react-icons/bs";
import styles from "./SideMenu.module.css";

const SideMenu = ({ bondOffer, cart, signup, showMenu, sideMenuHandler }) => {
  return (
    <div
      className={`${styles.sideMenuContainer} ${
        showMenu ? styles.active : null
      }`}
    >
      <div className={styles.logo}>
        <Link to="/">
          <img src={Logo} alt="debt management office nigeria" />
        </Link>
        <span onClick={sideMenuHandler} style={{ cursor: "pointer" }}>
          <BsArrowLeftShort color="#fff" size="2.2em" />
        </span>
      </div>
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
    </div>
  );
};

export default SideMenu;
