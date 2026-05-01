import ButtonDoc from "../../components/Button/ButtonDoc.mdx";
import InputDoc from "../../components/Input/InputDoc.mdx";
import styles from "./Components.module.css";
import { useParams } from "react-router";

const componentMap = {
  button: <ButtonDoc />,
  input: <InputDoc />,
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
