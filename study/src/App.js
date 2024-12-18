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

  const Person = ({ name }) => {
    return <h1>Hello, {name}</h1>;
  };

  const Toogle = () => {
    const [show, setShow] = useState(false);

    function handleShow() {
      setShow(!show);
    }

    return (
      <>
        <button onClick={handleShow}>{show ? "Hide" : "Show"}</button>
        <p>{show ? "This is React" : " "}</p>
      </>
    );
  };

  // function Counter() {
  //   const [count, setCount] = useState(0);

  //   function increment() {
  //     setCount((prev) => prev + 1);
  //   }

  //   return (
  //     <>
  //       <button onClick={increment}>Increment</button>
  //       <p>{count}</p>
  //     </>
  //   );
  // }

  const Loading = ({ status }) => {
    return status === "loading"
      ? "Loading..."
      : status === "Success"
      ? "Data Loadedd"
      : status === "error"
      ? "Error Loading Data..."
      : null;
  };

  const fruits = ["mango", "apple", "berries", "grapes"];

  const Fruits = () => {
    return (
      <ol>
        <h1>My List Of Fruits</h1>
        {fruits.map((val) => (
          <li>{val}</li>
        ))}
      </ol>
    );
  };

  const CounterApplication = () => {
    const [count, setCount] = useState(0);

    function handleIncrement() {
      setCount((prev) => prev + 1);
    }

    function handleDecrement() {
      setCount((prev) => prev - 1);
    }

    function handleReset() {
      setCount(0);
    }

    return (
      <>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <p>{count}</p>
      </>
    );
  };

  const SwithApp = () => {
    const [light, setLight] = useState(false);

    function handleClick() {
      setLight(!light);
    }

    return (
      <>
        <button onClick={handleClick}>{!light ? "ON" : "OFF"}</button>
        <div
          style={{
            backgroundColor: light ? "yellow" : "black",
            width: 200,
            height: 200,
          }}
        ></div>
      </>
    );
  };

  const ButtonClick = () => {
    const [text, setText] = useState(false);

    function handleText() {
      setText(!text);
    }

    return (
      <>
        <button onClick={handleText}>{!text ? "ClickMe" : "Clicked"}</button>
      </>
    );
  };

  //todo: More Questions on lists, keys and forms.

  const ListItems = () => {
    const [list, setList] = useState([]);
    const [inputvalue, setInputValue] = useState("");

    function handleSubmit(e) {
      e.preventDefault();

      if (inputvalue.trim() !== "") {
        setList((prev) => [...prev, inputvalue]);
        setInputValue("");
      } else {
        alert("Kindly write something!");
      }
    }
    function handleChange(e) {
      setInputValue(e.target.value);
    }

    return (
      <div>
        <form onClick={handleSubmit}>
          <input type="text" value={inputvalue} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  function RequestTracker() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
      setPending((p) => p + 1);
      await delay(3000);
      setPending((p) => p - 1);
      setCompleted((c) => c + 1);
    }

    return (
      <>
        <h3>Pending: {pending}</h3>
        <h3>Completed: {completed}</h3>
        <button onClick={handleClick}>Buy</button>
      </>
    );
  }

  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  //todo Question 1: Counter with Multiple Updates
  const AppCounter = () => {
    const [count, setCount] = useState(0);

    return (
      <>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCount((prev) => prev - 1);
            setCount((prev) => prev - 1);
            setCount((prev) => prev - 1);
          }}
        >
          Decrement
        </button>
        <p>{count}</p>
      </>
    );
  };

  //todo: Question 2: Toggle Between States
  const ToggleState = () => {
    const [toggle, setToggle] = useState(false);

    function handleToggle() {
      setToggle((prev) => !prev);
    }

    return (
      <>
        <button onClick={handleToggle}>Toggle</button>
        {toggle && (
          <div>
            <p>First</p>
            <p>Second</p>
            <p>Third</p>
          </div>
        )}
      </>
    );
  };

  //todo: Question 3: Delayed State Updates
  const DelayedCounter = () => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

    function handleIncrement() {
      setLoading(true);
      setTimeout(() => {
        setCount((prev) => prev + 1);
        setLoading(false);
      }, 3000);
    }

    return (
      <>
        <button onClick={handleIncrement} disabled={loading}>
          IncrementDelay(3s)
        </button>
        <p>{loading ? "Updating..." : `Count: ${count}`}</p>
      </>
    );
  };

  //todo: Question 4: Batched Updates
  const BatchedUpadte = () => {
    const [count, setCount] = useState(0);

    function handleIncrementSingle() {
      setCount((prev) => prev + 5);
    }

    return (
      <>
        <button onClick={handleIncrementSingle}>Increment(Single)</button>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
          }}
        >
          {" "}
          increment(Batched)
        </button>
        <p>{count}</p>
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
      <Person name={"Inzhagi"} />
      <br />
      <Toogle />
      <br />
      <Loading status={"loading"} />
      <br />
      <Loading status={"Success"} />
      <br />
      <Loading status={"error"} />
      <Fruits />
      <br />
      <CounterApplication />
      <br />
      <SwithApp />
      <br />
      <ButtonClick />
      <br />
      <br />
      <ListItems />
      <br />
      <RequestTracker />
      <br />
      <AppCounter />
      <br />
      <ToggleState />
      <br />
      <DelayedCounter />
      <br />
      <BatchedUpadte />
    </>
  );
}

export default App;
