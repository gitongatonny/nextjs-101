import Link from "next/link";

//Setting up static & "pseudo-dynamic" link components to a list
export default function ProductsList() {
    const productId = 13;
    return (
        <>
            <br />
            <Link href="/">Home</Link>
            <br />
            <h1>Products List</h1>
            <ol>
                <li>
                    <Link href="/products/1">Product 1</Link>
                </li>

                <li>
                    <Link href="/products/2">Product 2</Link>
                </li>                
                
                <li>
                    <Link href="/products/3">Product 3</Link>
                </li>    

                {/* replace prop - takes the user to the root route (overwrites current format)  */}
                <li>
                    <Link href="/products/4" replace>Product 4</Link>
                </li>

                {/*Sort of dynamic list item*/}
                <li><Link href={`/products/${productId}`}> Product {productId}</Link></li>
            </ol>
        </>
    );
}