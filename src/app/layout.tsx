////Root page metadata

//Importing metadata
import { Metadata } from "next";

//Importing the error wrapper
import { ErrorWrapper } from "./error-wrapper";

//3 types of object value metadata
export const metadata: Metadata = {
  title: {
    template: "%s | CompanyName",
    default: "Page | CompanyName",
    //absolute: "", //use to set an absolute value that overrules any parent configs (not used on root file)
  },
  description: "Learning Next.js",
};

//Root layout file
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";

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
          <p style={{ fontWeight: "bold" }}>Header Sample</p>
        </header>

        <Navbar />

        {/* Wrap children components */}
        <ErrorWrapper> {children} </ErrorWrapper>

        {/* Global Footer */}
        <footer
          style={{
            backgroundColor: "black",
            padding: "0.5rem",
          }}
        >
          <p style={{ color: "white", fontWeight: "bold" }}>Footer Sample</p>
        </footer>
      </body>
    </html>
  );
}
