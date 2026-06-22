//Target Route - to be intercepted
//It displays when the intecepted route's page is reload

import Link from "next/link";

export default function InterceptedFolder2() {
    return (
        <>
        <h1>Folder 2 Page - To be Intercepted</h1>

        <h2><Link href = "/f4" >Folder 4 - F4</Link></h2>

        <h2><Link href = "/f5" >Inner Folder 2 - InnerF2</Link></h2>

        </>
    )
}