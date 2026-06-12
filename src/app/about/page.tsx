//Import Link
import Link from "next/link";

//About Page Metadata
export const metadata = {
    title: "About NextJS",
};

// Static about page
export default function About() {
    return (
    <div>
        <h1>This is an About Page</h1>

        <Link href="/">Home</Link>

    </div>
    ); 
}