//Import Link
import Link from "next/link";

export default function Home() {
    return (
    <div>

    <h1>This is a Home Page</h1>
    

    <Link href="/blog">Blog</Link>
    <br />

    <Link href="/articles/breaking-news?lang=en">Read in English</Link>
    <br />

    <Link href="/articles/breaking-news?lang=fr">Read in French</Link>
    <br />


    {/*Link Component */}
    <Link href="/about">About</Link>
    <br />

    </div>
    );

}