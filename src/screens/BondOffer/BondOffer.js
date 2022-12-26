import styles from "./BondOffer.module.css";
import Card from "../../components/Card/Card";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Layout from "../../components/Layout/Layout";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const BondOffer = () => {
  return (
    <>
      <Layout bondOffer />
      <main className={styles.main}>
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          controlsStrategy="alternate"
          paddingRight={10}
          paddingLeft={10}
          disableButtonsControls={true}
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </AliceCarousel>
      </main>
    </>
  );
};

export default BondOffer;
