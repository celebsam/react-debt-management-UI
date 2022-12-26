import React, { useState } from "react";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import styles from "./Layout.module.css";

const Layout = ({ cart, bondOffer, signup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const sideMenuHandler = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      {showMenu ? (
        <div className={styles.backdrop} onClick={sideMenuHandler}></div>
      ) : null}
      <SideMenu
        showMenu={showMenu}
        sideMenuHandler={sideMenuHandler}
        cart={cart}
        bondOffer={bondOffer}
        signup={signup}
      />
      <Header
        sideMenuHandler={sideMenuHandler}
        cart={cart}
        bondOffer={bondOffer}
        signup={signup}
      />
    </>
  );
};

export default Layout;
