import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import NewItem from "./components/NewItem";

const App = () => {
  const [stillToDo, setStillToDo] = useState(["wash the dishes", "dry the dishes"]);
  const [completed, setCompleted] = useState([]);

  const handleCompletedClick = (index) => {
    const itemToHandle = stillToDo[index];
    const filtered = stillToDo.filter((item) => {
      return item !== stillToDo[index];
    });
    setStillToDo(filtered);
    setCompleted([...completed, itemToHandle]);
  };

  const handleBinClick = (itemToBin, column, setFunction) => {
    const filtered = column.filter((item) => {
      return item !== itemToBin;
    });
    setFunction(filtered);
  };

  const handleSubmit = (newItem) => {
    setStillToDo([...stillToDo, newItem]);
  };

  return (
    <div className="App">
      <NewItem handleSubmit={handleSubmit} />
      <div className="column-holder">
        <div className="to-do-column column">
          <div>
            <h2>Still to do</h2>
          </div>
          <div>
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
