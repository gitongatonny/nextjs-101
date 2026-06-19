// Simple helper fn:
// Returns a random whole number between 1 and 100
function getRandomNumber(): number {
  return Math.floor(Math.random() * 100) + 1;
}
// Generate a random # that we will show on the page
const randomNumber = getRandomNumber();

//Custom layout for the product details page
export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Deliberately fail when the random number is > 50
  // Allows me to test route-level error handling with error.tsx
  if (randomNumber > 50) {
    throw new Error(
      "Intentional error for testing error.tsx (error handling) - Products",);
  }

  return (
    <>
      {children}
      <h2>Featured Products | Random number: {randomNumber}</h2>
    </>
  );
}
