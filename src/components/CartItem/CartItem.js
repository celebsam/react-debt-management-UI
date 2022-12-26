import styles from "./CartItem.module.css";
import coatOfArm from "../../images/Coat_of_arms_of_Nigeria.svg.png";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

const CartItem = () => {
  return (
    <div className={styles.cartItemContainer}>
      <div className={styles.leftContainer}>
        <input type="checkbox" />
        <img src={coatOfArm} alt="Nigeria coat of arm" />
        <h3>730 days Savings Bond</h3>
      </div>
      <div className={styles.btnContainer}>
        <button>Automatic</button>
        <button>Delete</button>
      </div>
      <div>
        <p className={styles.value}>Value(&#8358;)</p>
        <div className={styles.amount}>
          <p>3000,000.00</p>
          <FiMinusCircle size="0.9em" />
          <span>01</span>
          <FiPlusCircle size="0.9em" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
