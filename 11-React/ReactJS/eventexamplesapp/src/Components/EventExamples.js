import { useState } from "react";

function EventExamples() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function sayHello() {
    alert("Hello! Have a nice day.");
  }

  function sayWelcome(message) {
    alert(message);
  }

  function handleClick() {
    alert("I was clicked");
  }

  return (
    <div>

      <h2>Counter : {count}</h2>

      <button onClick={()=>{
        increment();
        sayHello();
      }}>
        Increment
      </button>

      <button onClick={decrement}>
        Decrement
      </button>

      <br/><br/>

      <button onClick={()=>sayWelcome("Welcome")}>
        Say Welcome
      </button>

      <br/><br/>

      <button onClick={handleClick}>
        OnPress
      </button>

    </div>
  );

}

export default EventExamples;