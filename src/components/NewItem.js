import React from "react";
import { useState } from "react";

const NewItem = (props) => {
  // initialise the state of the new item. Will hold the value of the input field i.e any new items to be added by the user
  const [newItem, setNewItem] = useState("");

  // update the state to reflect what the user types in the inout field
  const handleChange = (e) => {
    setNewItem(e.target.value);
  };

  // hanle the submit of the form
  const handleSubmit = (e) => {
    // VERY IMPORTANT
    // prevents the form from refreshing the window
    e.preventDefault();
    props.handleSubmit(newItem);
    // resets the input box
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
