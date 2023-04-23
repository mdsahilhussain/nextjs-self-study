import Link from "next/link";
import React from "react";

export const metadata = {
    title: "Login",
    description: "This is Login Page of Todo List  Generated by Next.js",
  };

const page = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="email" placeholder="enter your email" />
          <input type="password" placeholder="enter your password" />
          <button type="submit">Login</button>
          <p>or</p>
          <Link href={"/register"}>New User</Link>
        </form>
      </section>
    </div>
  );
};

export default page;
