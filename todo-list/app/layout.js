import { UserContextProvider } from "@/components/ClientComponents";
import "../styles/app.scss";
import React from "react";
import Header from "./header";

export const metadata = {
  title: "Todo List",
  description: "Todo List  Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          <React.Fragment>
            <Header />
            {children}
          </React.Fragment>
        </UserContextProvider>
      </body>
    </html>
  );
}
