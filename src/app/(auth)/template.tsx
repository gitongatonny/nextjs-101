"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";

// Centralized auth nav config for easier maintenance and reuse.
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  // Typed layout contract for nested route content.
  children: ReactNode;
}) {
  // Controlled input state for local UI interactions.
  const [input, setInput] = useState("");

  // Current route used to highlight the active auth link.
  const pathname = usePathname();

  return (
    <div>
      <div>
        {/* Controlled input keeps state predictable and testable. */}
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>

      {/* Data-driven nav rendering avoids duplicated link markup. */}
      {navLinks.map((link) => {
        // Supports exact matches and nested routes, excluding root overmatch.
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");

        return (
          <Link
            // Active state improves route awareness in auth flows.
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}

      {/* Child route content renders inside the shared auth layout. */}
      {children}
    </div>
  );
}
