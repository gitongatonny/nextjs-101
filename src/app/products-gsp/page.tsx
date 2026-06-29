import Link from "next/link";

export default function ProductsPageGSP(){
    return (
        <>
        <h1>Featured Products</h1>
        <Link href="/products-gsp/1"> Product 1 </Link>
        <Link href="/products-gsp/1"> Product 2 </Link>
        <Link href="/products-gsp/1"> Product 3 </Link>
        <Link href="/products-gsp/1"> Product 4 </Link>
        </>
    );
}