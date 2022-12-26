import styles from "./Cart.module.css";
import Header from "../../components/Header/Header";
import CartItem from "../../components/CartItem/CartItem";
import { BiChevronDown } from "react-icons/bi";

const Cart = () => {
  return (
    <>
      <Header cart />
      <main className={styles.main}>
        <CartItem />
        <CartItem />
        <section>
          <div>
            <div style={{ display: "flex" }}>
              <small className={styles.fees}>
                Fees + Taxes <BiChevronDown size="1.5em" color="#087908" />
              </small>
              <small>&#8358;2.09</small>
            </div>
            <br />
            <small>
              This is a 730 days Saving Bond, you have a fixed income
            </small>
          </div>
          <div>
            <p className={styles.totalBuy}>Total Buy</p>
            <h3>&#8358;600,000.00</h3>
          </div>
        </section>
        <button className={styles.checkOut}>Check Out</button>
      </main>
    </>
  );
};

export default Cart;
