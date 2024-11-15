import "./App.css";
import { useState } from "react";

function App() {
  const Welcome = ({ name }) => {
    return <h1>Welcome back {name}!</h1>;
  };
  return (
    <>
      <Welcome name={"Steve"} />
    </>
  );
}

export default App;
