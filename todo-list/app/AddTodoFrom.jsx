"use client";
import React from "react";

const AddTodoFrom = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="text" placeholder="Task Title" />
          <input type="text" placeholder="Task Description" />
          <buttton type="submit">Add Task</buttton>
        </form>
      </section>
    </div>
  );
};

export default AddTodoFrom;
