//Import the usePathname router hook for reading the current URL path - it's a client component
//We use it to show different messages based on the route parameter.
"use client";
import { usePathname } from "next/navigation";

// Custom Review Not Found Page
export default function NotFound() {
    
    //Fetch the current URL path
    const pathname = usePathname();

    //Extract the product and review IDs from the URL
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];

    //Show a dynamic message corresponding the specific review and product requested.
    return (
      <div>
        <h2>Review: {reviewId} for Product: {productId} Not Found</h2>
      </div>
    );

  }
  