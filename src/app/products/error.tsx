"use client";

import { startTransition } from "react";
import { useRouter } from "next/navigation";

// Error boundary for this route segment
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  // Retry handler:
  // 1. Refreshes the route so server components run again
  // 2. Resets the error boundary so React can attempt a fresh render
  function handleRetry() {
    startTransition(() => {
      router.refresh();
      reset();
    });
  }

  return (
    <div>
      <p>Something went wrong: {error.message}</p>
      <button onClick={handleRetry}>Try again</button>
    </div>
  );
}
