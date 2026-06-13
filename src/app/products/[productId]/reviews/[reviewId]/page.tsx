//Importing the notFound and redirect functions
import { notFound, redirect } from "next/navigation";

// Nested dynamic routing
export default async function ReviewDetail( {
    params,
}: {
    params: Promise<{ reviewId: string; productId: string }>;
}) {
    const {productId, reviewId} = await params
    
    //Adding the custom notFound feature to reviews
    if(parseInt(reviewId) > 1000){
        //notFound(); We've switched to redirect
        redirect("/products");
    }

    return <h1> This is review: {reviewId} for product: {productId}</h1>;
}