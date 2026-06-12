//Import Link
import Link from "next/link";

export default function Home() {
    return (
    <div>
    <h1>This is a Home Page</h1>
    {/*Link Component */}
    <Link href="/about">About</Link>
    <br />

    </div>
    );

}