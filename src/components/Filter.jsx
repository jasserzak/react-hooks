import { TextInput } from "flowbite-react";
import React from "react";

const Filter = (props) => {
  const { title, setTitle } = props;
  const handleChange = (e) => {
    setTitle(e.traget.value);
  };
  return (
    <div className="mt-6 w-2/3 md:w-1/2">
      <TextInput
        placeholder="Enter Movie Name ..."
        value={title}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
