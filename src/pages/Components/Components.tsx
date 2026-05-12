import ButtonDoc from "../../components/Button/ButtonDoc.mdx";
import InputDoc from "../../components/Input/InputDoc.mdx";
import PasswordInputDoc from "../../components/PasswordInput/PasswordInputDoc.mdx";
import CardDoc from "../../components/Card/CardDoc.mdx";
import styles from "./Components.module.css";
import { useParams } from "react-router";

const componentMap = {
  button: <ButtonDoc />,
  input: <InputDoc />,
  password: <PasswordInputDoc />,
  card: <CardDoc />,
};

const Components = () => {
  const { componentName } = useParams();

  const content = componentMap[componentName as keyof typeof componentMap];

  return (
    <section className={styles.components}>
      {content || <p>Component not found</p>}
    </section>
  );
};

export default Components;
