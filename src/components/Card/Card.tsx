import oceanImage from "../../assets/images/ocean.webp";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <>
      <article className={styles.card}>
        <div className={styles.cardImgContainer}>
          <img
            className={styles.cardImg}
            src={oceanImage}
            alt="A close up of the ocean"
          />
        </div>
        <div className={styles.cardDetails}>
          <h3>The Ocean</h3>
          <p className={styles.cardText}>
            A bunch and a load more bunch of words about the ocean.
          </p>
          <button className={styles.cardButton}>Book Now</button>
          <a></a>
        </div>
      </article>
    </>
  );
};

export default Card;

// maybe add some label/info points
