import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import NewItem from "./components/NewItem";

const App = () => {
  // Initialise the state for the to do list and completed items
  const [stillToDo, setStillToDo] = useState(["wash the dishes", "dry the dishes"]);
  const [completed, setCompleted] = useState([]);

  // a function to move items from the to do list into the completed list
  const handleCompletedClick = (index) => {
    const itemToHandle = stillToDo[index];
    const filtered = stillToDo.filter((item) => {
      return item !== stillToDo[index];
    });
    setStillToDo(filtered);
    setCompleted([...completed, itemToHandle]);
  };

  // a function to remove an item from either list when the bin button is clicked
  const handleBinClick = (itemToBin, column, setFunction) => {
    const filtered = column.filter((item) => {
      return item !== itemToBin;
    });
    setFunction(filtered);
  };

  // a function to handle the submit and add a new item to the still to do list
  const handleSubmit = (newItem) => {
    setStillToDo([...stillToDo, newItem]);
  };

  return (
    <div className="App">
      {/* a component that will render the input field to add a new item to the to do list */}
      <NewItem handleSubmit={handleSubmit} />

      <div className="column-holder">
        <div className="to-do-column column">
          <div>
            <h2>Still to do</h2>
          </div>
          <div>
            {/* map through the still tot do state and display a card for each item in the list */}
            {stillToDo.map((item, index) => {
              return (
                <Card
                  key={index}
                  todo={item}
                  isComplete={false}
                  handleCompletedClick={() => {
                    handleCompletedClick(index);
                  }}
                  handleBinClick={() => {
                    handleBinClick(item, stillToDo, setStillToDo);
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className="completed-column column">
          <div>
            <h2>Completed</h2>
          </div>
          <div>
            {/* same map logic for the completed list */}
            {completed.map((item, index) => {
              return (
                <Card
                  key={index}
                  todo={item}
                  isComplete={true}
                  handleBinClick={() => {
                    handleBinClick(item, completed, setCompleted);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
