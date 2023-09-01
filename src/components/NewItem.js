import React from "react";
import { useState } from "react";

const NewItem = (props) => {
  const [newItem, setNewItem] = useState("");

  const handleChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter an item to do:
        <input type="text" name="new-item" value={newItem} onChange={handleChange} />
      </label>
      <input type="submit" name="submit" />
    </form>
  );
};

export default NewItem;
