export const metadata = {
  title: "Next.js 101",
  description: "Learning Next.js"
};

//Root layout file
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Global Header */}
        <header
          style={{
            backgroundColor: "#ff7a21",
            padding: "0.5rem",
          }}
        >
          <p style={{ fontWeight: "bold" }} >Header Sample</p>
        </header>

        {children}

        {/* Global Footer */}
        <footer
          style={{
            backgroundColor: "black",
            padding: "0.5rem",
          }}
        >
          <p style={{ color: "white", fontWeight: "bold"}} >Footer Sample</p>
        </footer>
      </body>
    </html>
  );
}
