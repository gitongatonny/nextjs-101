//Importing the notFound function
import { notFound } from "next/navigation";

// Nested dynamic routing
export default async function ReviewDetail( {
    params,
}: {
    params: Promise<{ reviewId: string; productId: string }>;
}) {
    const {productId, reviewId} = await params
    
    //Adding the custom notFound feature to reviews
    if(parseInt(reviewId) > 1000){
        notFound();
    }

    return <h1> This is review: {reviewId} for product: {productId}</h1>;
}