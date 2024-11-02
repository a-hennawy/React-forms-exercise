import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ createBox }) => {
  const INIT_VALUES = {
    backgroundColor: "",
    width: "",
    height: "",
  };
  const [boxForm, setBoxForm] = useState(INIT_VALUES);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Background color is set to ${boxForm.backgroundColor} and a width of ${boxForm.width}px and a height of ${boxForm.height}`
    );
    createBox({ ...boxForm, id: uuid() });
    setBoxForm(INIT_VALUES);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoxForm((bForm) => ({ ...bForm, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">Background Color: </label>
      <input
        type="text"
        placeholder="Background Color"
        name="backgroundColor"
        value={boxForm.backgroundColor}
        onChange={handleChange}
      />

      <label htmlFor="width">Width: </label>
      <input
        type="text"
        placeholder="width"
        name="width"
        value={boxForm.width}
        onChange={handleChange}
      />

      <label htmlFor="height">height: </label>
      <input
        type="text"
        placeholder="height"
        name="height"
        value={boxForm.height}
        onChange={handleChange}
      />
      <button>Add box!!</button>
    </form>
  );
};

export default NewBoxForm;
