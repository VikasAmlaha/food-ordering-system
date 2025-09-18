import React, { useState } from "react";

const UserFunction = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);
  const { name, location } = props;
  return (
    <div>
      <h1>User Details Functional Component</h1>
      <h2>Name : {name}</h2>
      <h2>Location : {location}</h2>
      <h3>Count : {count}</h3>
      <h3>Count2 : {count2}</h3>
      <div style={{ display: "flex", gap: 5 }}>
        <button onClick={() => setCount((prev) => prev + 1)}>Counter</button>
        <button onClick={() => setCount2((prev) => prev + 2)}>
          Counter*2
        </button>
      </div>
    </div>
  );
};

export default UserFunction;