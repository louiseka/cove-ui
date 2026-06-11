import type { CardProps } from "./Card.type";
import Button from "../Button/Button";
import styles from "./Card.module.css";

import { FaArrowRight } from "react-icons/fa6";

const Card = ({
  img,
  imgAlt,
  title,
  description,
  buttonText,
  link,
  linkText,
  layout = "vertical",
}: CardProps) => {
  return (
    <>
      <article className={`${styles.card} ${styles[layout]}`}>
        {img && (
          <div className={styles.cardImgContainer}>
            <img className={styles.cardImg} src={img} alt={imgAlt} />
          </div>
        )}
        <div className={styles.cardDetails}>
          <h3>{title}</h3>
          <p className={styles.cardText}>{description}</p>
          {buttonText && (
            <Button fullWidth type="button" variant="primary">
              {buttonText}
            </Button>
          )}
          {link && linkText && (
            <a className={styles.cardLink} href={link}>
              {linkText} <FaArrowRight />
            </a>
          )}
        </div>
      </article>
    </>
  );
};

export default Card;
