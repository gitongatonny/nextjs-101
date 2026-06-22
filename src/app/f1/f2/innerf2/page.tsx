// Target route to be intercepted but from a dir (innerf2) 3 levels lower - the concept here is intercepting routes in the root app directory

import Link from "next/link";

export default function InnerFolder2(){
    return (
        <>
        <h1>Inner Folder 2 Route</h1>

        <h2><Link href = "/f5">Folder 5</Link></h2>
        </>
    )
}