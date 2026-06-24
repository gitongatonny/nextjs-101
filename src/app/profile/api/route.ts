import  { type NextRequest } from "next/server"; 

import { headers } from "next/headers";

// Basic Route Handler Organization - place it in an 'api' folder to prevent it from taking precedence over the page.tsx file in the same folder.
export async function GET(request: NextRequest){
    //Method 1. (Using request param) extract request headers
    //const requestHeaders = new Headers(request.headers);
    //show Authorization header's value
    //console.log(requestHeaders.get("Authorization"));

    //Method 2. Headers fn from Next.js
    const headersList = await headers();
    console.log(headersList.get("Authorization"));

    return new Response("<h1>Profile Data</h1>", {
        //Sending custom header to convert it from text to html
        headers: {
            "Content-Type": "text/html",
        },
    });
}