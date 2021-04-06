import React, { useState } from "react";
import "./style.css";

import { UserDetails } from './UserDetails';

export default function App() {
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count} ++</button>
      
      <h2>Select a user</h2>

      <button onClick={() => setUserId(1)}>User 1</button>
      <button onClick={() => setUserId(2)}>User 2</button>
      <button onClick={() => setUserId(3)}>User 3</button>

      <button onClick={() => setUserId(0)}>Clear</button>

      {(userId > 0) && (
        <UserDetails userId={userId} />
      )}
    </div>
  );
}
