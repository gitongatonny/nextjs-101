//Streaming
import { Suspense } from "react";

import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";

export default function ProductReviews(){
    return (
        <div>
            <h1>Product Reviews</h1>

            {/*Progressive rendering - good for UX*/}
            <Suspense fallback={<p>Loading product details...</p>}> 
                <Product /> 
            </Suspense> 

            <Suspense fallback={<p>Loading reviews</p>} >
                <Reviews />
            </Suspense>
            
        </div>
    );
}