import { TodoItem } from "@/components/ServerComponents";
import React from "react";
import AddTodoFrom from "./AddTodoFrom";

const page = () => {
  return (
    <div className="container">
      <AddTodoFrom />
      <section className="todosContainer">
        <TodoItem
          title={"sample task"}
          description={"adalskdaj lkdso  iojldksd  aooeowi"}
          id={"sampleId"}
          completed={false}
        />
      </section>
    </div>
  );
};

export default page;
