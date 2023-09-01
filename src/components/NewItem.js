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
    <form className="input-form" onSubmit={handleSubmit}>
      <div>
        <label className="form-label">Enter an item to do:</label>
      </div>
      <div className="input-box-submit">
        <input className="input-box" type="text" name="new-item" value={newItem} onChange={handleChange} />
        <input className="submit-button button" type="submit" name="submit" value="Add" />
      </div>
    </form>
  );
};

export default NewItem;
