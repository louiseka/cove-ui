import ButtonDoc from "../../components/Button/ButtonDoc.mdx";
import Input from "../../components/Input/Input";
import styles from "./Components.module.css";
import { useParams } from "react-router";

const componentMap = {
  button: <ButtonDoc />,
  input: <Input />,
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
