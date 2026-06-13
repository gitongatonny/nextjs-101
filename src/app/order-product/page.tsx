"use client"; // Required for useRouter hook

import { useRouter } from "next/navigation";

// Client component — handles programmatic navigation after an action
export default function OrderProduct() {
  // Access router instance for imperative navigation
  const router = useRouter();

  const handleClick = () => {
    // Simulate order logic before redirecting
    console.log("Placing your order");

    // Redirect to home after order is placed
    router.push("/");
  };

  return (
    <>
      <h1>Order Product</h1>
      {/* Triggers order logic and navigation on click */}
      <button onClick={handleClick}>Place Order</button>
      <br />
      <p></p>
    </>
  );
}