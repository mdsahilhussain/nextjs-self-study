import React from "react";

const header = () => {
  return (
    <div className="header">
      <div>
        <h2>Todo List.</h2>
      </div>
      <article>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/"}></Link>
      </article>
    </div>
  );
};

export default header;
