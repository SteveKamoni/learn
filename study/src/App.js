import "./App.css";
import { useState } from "react";

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

  const ButtonProp = ({ onClick, children }) => {
    return <button onClick={onClick}>{children}</button>;
  };

  function PlayButton({ movieName }) {
    function handleClickPlay() {
      alert(`Playing ${movieName}`);
    }

    return <ButtonProp onClick={handleClickPlay}>Play</ButtonProp>;
  }

  function UploadButton() {
    function handleUpload() {
      alert("Uploading...");
    }

    return <ButtonProp onClick={handleUpload}>Upload</ButtonProp>;
  }

  function ToolbarButton({ onClick, children }) {
    return (
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        {children}
      </button>
    );
  }
  function Toolbar() {
    return (
      <div
        className="Toolbar"
        onClick={() => {
          alert("You clicked on the toolbar!");
        }}
      >
        <ToolbarButton onClick={() => alert("Playing!")}>
          Play Movie
        </ToolbarButton>
        <ToolbarButton onClick={() => alert("Uploading!")}>
          Upload Image
        </ToolbarButton>
      </div>
    );
  }

  function FormSubmit() {
    const handleform = (e) => {
      e.preventDefault();
      alert("Submitting...");
    };

    return (
      <>
        <form>
          <input type="text" />
          <button type="submit" onClick={handleform}>
            Submit
          </button>
        </form>
      </>
    );
  }

  const ColorBtn = () => {
    function Handlecolors() {
      let color = document.body.style;
      if (color.backgroundColor === "green") {
        color.backgroundColor = "white";
      } else {
        color.backgroundColor = "green";
      }
    }

    return (
      <>
        <button onClick={Handlecolors}>Change Color</button>
      </>
    );
  };

  const NestedBtns = () => {
    function handleinfo(e) {
      e.stopPropagation();
      alert("Propagation");
    }

    function handlePropagation() {
      alert("Propagated...");
    }

    return (
      <>
        <div onClick={handlePropagation}>
          <button onClick={handleinfo}>Button1</button>
          <button onClick={handleinfo}>Button2</button>
        </div>
      </>
    );
  };

  const UserInfo = ({ name, role }) => {
    return name === undefined ? (
      <h1>No information on Guest!</h1>
    ) : (
      <h1>
        Hello, {name} and {role}
      </h1>
    );
  };

  const ClickCounter = () => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
      setCount((count) => {
        return count + 1;
      });
    };

    return (
      <>
        <button onClick={handleCount}>Incriment</button>
        <p>Incrimented: {count}</p>
      </>
    );
  };

  const RoleBasedGreeting = ({ role }) => {
    return role === "admin" ? (
      <h1>Welcome Back Admin!</h1>
    ) : role === "member" ? (
      <h1>Welcome Back Member!</h1>
    ) : (
      <h1>Welcome Back Guest!</h1>
    );
  };

  const RoleBasedGreetingShortened = ({ role }) => {
    return (
      <h1>
        Welcome Back{" "}
        {role === "admin" ? "Admin!" : role === "member" ? "Member" : "Guest"}
      </h1>
    );
  };

  const FeedbackForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Well done!");
    };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  };

  return (
    <>
      <Greeting name={"Steve"} />
      <UserInfo />
      <UserInfo name={"Steve"} role={"Administartor"} />
      <RoleBasedGreeting role={"admin"} />
      <RoleBasedGreeting />
      <RoleBasedGreetingShortened role={"member"} />
      <FeedbackForm />
      <NestedBtns />
      <ClickCounter />
      <FormSubmit />
      <ColorBtn />
      <Clicked />
      <Button onSmash={() => alert("Naming Event hanler props")}></Button>
      <PlayButton movieName={"John Wick Chapter 4"} />
      <UploadButton />
      <Toolbar />
    </>
  );
}

export default App;
