import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("Button Clicked");
  }

  const handleClick2 = () => {
    alert("Button 2 Clicked");
  };

  const handleClick4 = (num) => {
    alert(num + 7);
  };

  return (
    <>
      <h1>React core concepts-2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button
        onClick={() => {
          alert("Button 3 Clicked");
        }}
      >
        Click Me-3
      </button>
      <button onClick={() => handleClick4(8)}>Click Me 4</button>
    </>
  );
}

export default App;
