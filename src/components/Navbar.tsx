// Client component — required for usePathname (browser-only hook)
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

// Single source of truth for nav links — add/remove routes here only
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Products", href: "/products" },
  { label: "Dash - Parallel Routes", href: "/complex-dashboard" },
  { label: "Profile", href: "/profile" },
  { label: "Intercepting Routes", href: "/f1" },
];

export default function Navbar() {
  // Returns the current URL pathname (e.g. "/about" or "/blog/my-post")
  const pathname = usePathname();

  // "/" needs an exact match to avoid marking every route as active.
  // All other links use prefix matching so nested routes (e.g. /blog/post-1)
  // still highlight the parent link, while the trailing-slash guard prevents
  // false positives (e.g. /about not matching /about-us).
  function isActive(href: string): boolean {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <nav className={styles.navbar}>
      {/* Render each link; active class is applied via isActive */}
      {navLinks.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className={`${styles.navLink} ${isActive(href) ? styles.active : ""}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
