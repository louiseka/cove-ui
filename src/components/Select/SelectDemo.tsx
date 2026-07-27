import { useState } from "react";
import Select from "./Select";

const options = [
  { value: "spain", label: "Spain" },
  { value: "italy", label: "Italy" },
  { value: "greece", label: "Greece" },
];

const optionsWithPlaceholder = [
  { value: "", label: "Select a destination..." },
  ...options,
];

export const SelectDemo = () => {
  const [destination, setDestination] = useState("spain");

  return (
    <Select
      label="Choose a destination"
      selectName="holiday-destination"
      value={destination}
      onChange={setDestination}
      options={options}
    />
  );
};

export const ErrorSelectDemo = () => {
  const [value, setValue] = useState("");
  return (
    <Select
      label="Choose a destination"
      selectName="destination-error"
      value={value}
      onChange={setValue}
      error={value === ""}
      errorMessage="Please select a destination"
      options={optionsWithPlaceholder}
    />
  );
};

export const DisabledSelectDemo = () => (
  <Select
    label="Choose a destination"
    selectName="destination-disabled"
    value="spain"
    onChange={() => {}}
    disabled
    options={options}
  />
);
