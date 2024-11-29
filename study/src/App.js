import "./App.css";
import { useState, useEffect } from "react";

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
      setCounter((prev) => prev + 1);
      setColor("green");
    }

    function handleDecrement() {
      setCounter((prev) => prev - 1);
      setColor("red");
    }

    function handleColor() {
      setColor((prev) => !prev);
    }

    function handleReset() {
      setCounter(0);
    }

    return (
      <>
        <button onClick={handleIncrement}>Increment</button>
        <p style={{ color: color }}>{counter}</p>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleColor}>Toggle Color</button> <br />
        <button onClick={handleReset}>Reset</button>
      </>
    );
  };

  const TimerComponent = () => {
    const [value, setValue] = useState(10);
    const [timer, setTimer] = useState(false);

    // Automatically decrement value every second when timer is active
    useEffect(() => {
      let interval = null;
      if (timer) {
        interval = setInterval(() => {
          setValue((prev) => (prev > 0 ? prev - 1 : 0)); // Stop at 0
        }, 1000);
      } else {
        clearInterval(interval);
      }
      return () => clearInterval(interval); // Clean up on unmount or when timer stops
    }, [timer]);

    function handleStartStop() {
      setTimer((prev) => !prev);
    }

    function handleReset() {
      setValue(10);
      setTimer(false);
    }

    return (
      <>
        <br />
        {/* <button onClick={}>Decrement</button> */}
        <p>{value}</p>
        <button onClick={handleStartStop}>{timer ? "Stop" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
      </>
    );
  };

  const TrafficLights = () => {
    const [traffic, setTraffic] = useState(true);

    function handleTraffic() {
      setTraffic(!traffic);
      alert(`${traffic ? "Stop" : "Walk"} is the next one`);
    }

    return (
      <>
        <button
          onClick={handleTraffic}
          style={{ color: traffic ? "green" : "red" }}
        >
          {traffic ? "walk" : "Stop"}
        </button>
      </>
    );
  };

  const CounterApp = () => {
    const [count, setCount] = useState(0);

    function increment() {
      setCount((val) => val + 2);
    }

    return (
      <>
        <button onClick={increment}>Increment</button>
        <p>Count: {count}</p>
      </>
    );
  };

  const Button = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount((val) => val + 1);
      console.log(count);
    }

    return (
      <>
        <button onClick={handleClick}>Press Button</button>
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
      <TimerComponent /> <br />
      <br />
      <TrafficLights />
      <br />
      <CounterApp />
      <br />
      <Button />
    </>
  );
}

export default App;
