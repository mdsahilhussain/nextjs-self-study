"use client";
import React from "react";
import Link from "next/link";
import { createContext, useContext, useState } from "react";

export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const LogoutBtn = () => {
  const logoutHandler = () => {
    alert("Logout");
  };

  const { user } = useContext(UserContext);
  return user.id ? (
    <button className="btn" onClick={logoutHandler}>
      Log out
    </button>
  ) : (
    <Link href={"/login"}>Login</Link>
  );
};

export const TodoBtn = ({ id, completed }) => {
  const deleteHandler = (id) => {
    alert(`Deleting, ${id}`);
  };
  return (
    <React.Fragment>
      <input type="checkbox" checked={completed} />
      <button className="btn" onClick={deleteHandler}>
        Delete
      </button>
    </React.Fragment>
  );
};
