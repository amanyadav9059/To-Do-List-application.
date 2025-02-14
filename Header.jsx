// src/components/Header.jsx
import React, { useState } from "react";

const Header = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <header className="header">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </header>
  );
};

export default Header;
