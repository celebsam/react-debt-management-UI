import styles from "./SignUp.module.css";
import Header from "../../components/Header/Header";
import leftImg from "../../images/image 1.png";
import rightImg from "../../images/image 2.png";

const SignUp = () => {
  return (
    <>
      <Header signup />
      <main className={styles.main}>
        <h1>Sign Up</h1>
        <p>Stop spending, Start Investing</p>

        <img
          src={leftImg}
          alt="Left half of the coat of arm"
          className={styles.leftCoatOfArm}
        />
        <img
          src={rightImg}
          alt="Left half of the coat of arm"
          className={styles.rightCoatOfArm}
        />

        <form>
          <div className={styles.textField}>
            <label for="firstname">
              First Name
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter your First Name"
              id="firstname"
            />
          </div>
          <div className={styles.textField}>
            <label for="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter your First Name"
              id="firstname"
            />
          </div>
          <div className={styles.textField}>
            <label for="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter your First Name"
              id="firstname"
            />
          </div>
          <div className={styles.textField}>
            <label for="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter your First Name"
              id="firstname"
            />
          </div>
          <div className={styles.textField}>
            <label for="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter your First Name"
              id="firstname"
            />
          </div>

          <div className={styles.checkBox}>
            <input type="checkbox" />
            <small>
              By continuing, you agree to the <span>Terms and conditions</span>
            </small>
          </div>
          <button onClick={(e) => e.preventDefault()}>Sign Up</button>
        </form>
      </main>
    </>
  );
};

export default SignUp;
