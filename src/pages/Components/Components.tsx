import ButtonDoc from "../../components/Button/ButtonDoc.mdx";
import InputDoc from "../../components/Input/InputDoc.mdx";
import PasswordInputDoc from "../../components/PasswordInput/PasswordInputDoc.mdx";
import CardDoc from "../../components/Card/CardDoc.mdx";
import AccordionDoc from "../../components/Accordion/AccordionDoc.mdx";
import BadgeDoc from "../../components/Badge/BadgeDoc.mdx";
import SelectDoc from "../../components/Select/SelectDoc.mdx";

import styles from "./Components.module.css";
import { useParams } from "react-router";

const componentMap = {
  button: <ButtonDoc />,
  input: <InputDoc />,
  password: <PasswordInputDoc />,
  card: <CardDoc />,
  accordion: <AccordionDoc />,
  badge: <BadgeDoc />,
  select: <SelectDoc />,
};

const Components = () => {
  const { componentName } = useParams();

  const content = componentMap[componentName as keyof typeof componentMap];

  return (
    <section className={styles.components}>
      <p className={styles.componentsHeading}>COMPONENTS</p>
      {content || <p>Component not found</p>}
    </section>
  );
};

export default Components;
