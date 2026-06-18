// Import Next.js navigation helpers
import { redirect } from "next/navigation";

// Simple helper fn:
// Returns a random whole number between 1 and 100
function getRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
}

// Nested dynamic route page
export default async function ReviewDetail({
    params,
}: {
    params: Promise<{ reviewId: string; productId: string }>;
}) {
    // Awaiting route params because they're typed as a Promise here
    const { productId, reviewId } = await params;

    // If reviewId is too large, send the user back to /products
    if (parseInt(reviewId) > 1000) {
        redirect("/products");
    }

    // Generate a random # that we will show on the page
    const randomNumber = getRandomNumber();

    // Deliberately fail when the random number is > 50
    // Allows me to test route-level error handling with error.tsx
    if (randomNumber > 50) {
        throw new Error("Intentional error for testing error.tsx (error handling)");
    }

    // If no error happens, render the review details and the random #
    return (
        <h1>
            This is review: {reviewId} for product: {productId} | Random number:{" "}
            {randomNumber}
        </h1>
    );
}
