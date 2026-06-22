//Intercepting routes - this is the source route

import Link from "next/link";

export default function Folder1() {
    return (
    <>
        <h1>Folder 1 Page - Intercepting Routes</h1>

        <h2><Link href = "/f1/f2" > Folder 2 (f2) </Link></h2>

        <h2><Link href = "/f3" > Folder 3 (f3) </Link></h2>
        
    </>
    )
}