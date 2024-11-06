import "./App.css";

function App() {
  const Greeting = ({ name }) => {
    return <h1>Hello {name}, Welcome Back To Class!</h1>;
  };

  const Clicked = () => {
    function handleClick() {
      return alert("How did you know?");
    }

    return (
      <>
        <button onClick={handleClick}>Press</button>;
        <button onClick={() => alert("Second Click")}>Second</button>;
      </>
    );
  };

  const Button = ({ onSmash, prop = "Topic" }) => {
    return <button onClick={onSmash}>{prop}</button>;
  };

  return (
    <>
      <Greeting name={"Steve"} />
      <Clicked />
      <Button onSmash={() => alert("Naming Event hanler props")}></Button>
    </>
  );
}

export default App;
