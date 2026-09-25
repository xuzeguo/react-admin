import { useState, useEffect, memo } from "react";
function SimpleChildComponent({ text }) {
  console.log("i am a simple child component");
  return (
    <div>
      <h2>i am a simple child component</h2>
      <p> Text: {text} </p>
    </div>
  );
}
function TryUseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>TryUseState </h1>
      <p> Count: {count} </p>
      <button onClick={() => setCount(count + 1)}> Increment </button>
    </div>
  );
}
function TryIfElse() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <h1>TryIfElse </h1>
      {isLoading ? <p>Loading...</p> : <p>Data loaded</p>}
      <button onClick={() => setIsLoading(!isLoading)}>Toggle Loading</button>
    </div>
  );
}
function TryForLoop() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  return (
    <div>
      <h1>TryForLoop </h1>
      <button onClick={() => setNumbers([...numbers, numbers.length + 1])}>
        Add Number
      </button>
      <button onClick={() => setNumbers(numbers.slice(0, -1))}>
        Remove Last Number
      </button>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Finish project", completed: false },
    { id: 3, text: "Call mom", completed: false },
  ]);
  return (
    <div>
      <h1>TodoList </h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button
              onClick={(prev) =>
                setTodos((prev) =>
                  prev.map((t) =>
                    t.id === todo.id ? { ...t, completed: !t.completed } : t,
                  ),
                )
              }
            >
              {todo.completed ? "Complete" : "Incomplete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
function TryEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    console.log("no dependency count changed to", count);
  });
  return (
    <div>
      <h1>TryEffect </h1>
      <p> Count: {count} </p>
    </div>
  );
}
function ChildComponent({ count, children, countChange, slotA }) {
  return (
    <div>
      <p> Count: {count} </p>
      <button onClick={() => countChange(count + 1)}> Increment </button>
      {children}
      {slotA("John")}
    </div>
  );
}
function TryComponent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>TryComponent </h1>
      <ChildComponent
        count={count}
        countChange={setCount}
        slotA={(name) => {
          return <p> Slot A {name} </p>;
        }}
      >
        <p> Child Component </p>
      </ChildComponent>
    </div>
  );
}
const MemoChildComponent = memo(SimpleChildComponent);
function TryMemo() {
  const [count, setCount] = useState(0);
  console.log("TryMemo rendered");
  return (
    <div>
      <h1>TryMemo </h1>
      <p> Count: {count} </p>
      <button onClick={() => setCount(count + 1)}> Increment </button>
      <MemoChildComponent text="Hello" />
    </div>
  );
}
export {
  TryUseState,
  TryIfElse,
  TryForLoop,
  TodoList,
  TryEffect,
  TryComponent,
  TryMemo,
};
