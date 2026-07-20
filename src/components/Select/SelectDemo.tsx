import { useState } from "react";
import Select from "./Select";

const SelectDemo = () => {
  const [destination, setDestination] = useState("spain");

  return (
    <Select
      label="Choose a holiday destination"
      selectName="holiday-destination"
      value={destination}
      onChange={setDestination}
      options={[
        { value: "spain", label: "Spain" },
        { value: "italy", label: "Italy" },
        { value: "greece", label: "Greece" },
      ]}
    />
  );
};

// I'll add the errorDemo here too

export default SelectDemo;
