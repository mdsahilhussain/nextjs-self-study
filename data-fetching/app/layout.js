import "../styles/globals.css";
export const metadata = {
  title: "Next.js - self study",
  description: "There we study all about data fetching",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
