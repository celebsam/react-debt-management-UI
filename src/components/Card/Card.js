import styles from "./Card.module.css";
import coatOfArm from "../../images/Coat_of_arms_of_Nigeria.svg.png";
import { BiHeart } from "react-icons/bi";

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.logo}>
        <img src={coatOfArm} width="40" height="30" alt="Nigeria coat of arm" />
        <p>FGN Savings Bond</p>
      </div>
      <div className={styles.heading}>
        <h2>730 days Savings Bond</h2>
        <p>Due October 12, 2024</p>
      </div>
      <ul>
        <li>
          <p>Minimum</p>
          <p>&#8358;5,000</p>
        </li>
        <li>
          <p>% Per Year</p>
          <p>11.382%</p>
        </li>
        <li>
          <p>Interest Payment</p>
          <p>Quarterly</p>
        </li>
        <li>
          <p>Opening</p>
          <p>Oct/04/2022</p>
        </li>
        <li>
          <p>Closing Date</p>
          <p>Oct/07/2022</p>
        </li>
        <li>
          <p>Settlement</p>
          <p>Oct/12/2022</p>
        </li>
      </ul>
      <div className={styles.footer}>
        <button>Add to cart</button>
        <BiHeart size="1.5em" />
      </div>
    </div>
  );
};

export default Card;
