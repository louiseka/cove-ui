import type { CardProps } from "./Card.type";
import styles from "./Card.module.css";

const Card = ({
  img,
  imgAlt,
  title,
  description,
  buttonText,
  link,
}: CardProps) => {
  return (
    <>
      <article className={styles.card}>
        {img && (
          <div className={styles.cardImgContainer}>
            <img className={styles.cardImg} src={img} alt={imgAlt} />
          </div>
        )}
        <div className={styles.cardDetails}>
          <h3>{title}</h3>
          <p className={styles.cardText}>{description}</p>
          {buttonText && (
            <button className={styles.cardButton}>{buttonText}</button>
          )}
          {link && <a>{link}</a>}
        </div>
      </article>
    </>
  );
};

export default Card;

// maybe add some label/info points
