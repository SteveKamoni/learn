import "./App.css";
import { useState } from "react";

function App() {
  const Welcome = ({ name }) => {
    return <h1>Welcome back {name}!</h1>;
  };

  const [count, setCount] = useState(0);

  const IncrimentBtn = () => {
    const incriment = () => {
      setCount((prevcount) => prevcount + 1);
    };

    return (
      <>
        <button onClick={incriment}>Incriment</button>
        <h3>{count}</h3>
      </>
    );
  };

  const [showMore, setShowMore] = useState(false);
  const Message = () => {
    function handleMoreClick() {
      setShowMore(!showMore);
    }
    return (
      <>
        <button onClick={handleMoreClick}>{showMore ? "Hide" : "Show"}</button>
        {showMore && <p>Hello World!</p>}
      </>
    );
  };

  const FormState = () => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent form's default behavior (like reloading the page)
      alert(`Submitted value: ${value}`);
    };

    const handleChange = (e) => {
      setValue(e.target.value); // Update state with the input's current value
    };

    return (
      <>
        <form onSubmit={handleSubmit}>
          {" "}
          <input type="text" value={value} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
        <p>{value}</p>
      </>
    );
  };

  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState(false);

  const Counter = () => {
    function handleIncrement() {
      setCounter((inc) => inc + 1);
    }

    function handleDecrement() {
      setCount(count - 1);
    }

    function handleColor() {
      setColor(!color);
    }

    return (
      <>
        <button
          onClick={(handleIncrement, handleColor)}
          style={{ color: color ? "green" : "red" }}
        >
          Increment
        </button>
        <p>{counter}</p>
        <button onClick={handleDecrement}>Decrement</button>
      </>
    );
  };

  return (
    <>
      <Welcome name={"Steve"} />
      <IncrimentBtn />
      <Message />
      <FormState />
      <Counter />
    </>
  );
}

export default App;
