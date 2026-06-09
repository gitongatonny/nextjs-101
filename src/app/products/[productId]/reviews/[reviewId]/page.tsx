// Nested dynamic routing
export default async function ReviewDetail( {
    params,
}: {
    params: Promise<{ reviewId: string; productId: string }>;
}) {
    const {productId, reviewId} = await params
    return <h1> This is review: {reviewId} for product: {productId}</h1>;
}