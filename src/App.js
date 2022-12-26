import styles from "./App.module.css";
import mobilePhone from "./images/Component 3.png";
import popup from "./images/phone popup.PNG";
import { BsArrowRightShort } from "react-icons/bs";
import { BsPlayCircle } from "react-icons/bs";
import Layout from "./components/Layout/Layout";

const Home = () => {
  return (
    <>
      <Layout />
      <main className={styles.main}>
        <div className={styles.textContainer}>
          <h1>Subscribe to FGN Saving Bond</h1>
          <p>Loan and get paid with interest</p>
          <div className={styles.btnContainer}>
            <button className={styles.started}>
              Get Started &nbsp; <BsArrowRightShort size="1.5em" />
            </button>
            <button className={styles.video}>
              <BsPlayCircle /> &nbsp; See Video
            </button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={mobilePhone} alt="Mobile phone" />
          <div className={styles.box}></div>
          <img className={styles.popup} src={popup} alt="Mobile phone pop up" />
        </div>
      </main>
    </>
  );
};

export default Home;
