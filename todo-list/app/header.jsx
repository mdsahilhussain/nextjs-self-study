
import { LogoutBtn } from "@/components/ClientComponents";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h2>Todo List.</h2>
      </div>
      <article>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <LogoutBtn />
      </article>
    </div>
  );
};

export default Header;
