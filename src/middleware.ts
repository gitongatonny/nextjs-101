//Simple middleware to redirect users to the homepage when they access the profile page

//Extend the std response API
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

//Fn that accepts a next request
export function middleware(request: NextRequest) {
    
    //Handling cookies with middleware
    const response = NextResponse.next();
    const themePreference = request.cookies.get("theme")
    if (!themePreference) {
        response.cookies.set("theme", "dark");
    }

    //Custom header
    response.headers.set("custom-header", "custom-value") 

    return response
    
    // return NextResponse.redirect(new URL("/", request.url));

    //Using conditional statement method, commented out the 1st method - using custom matcher config
    /*if (request.nextUrl.pathname === "/profile"){
        return NextResponse.rewrite(new URL("/hello", request.nextUrl)); //rewrites to /hello route
    } */
}

//Apply this only to the /profile route
/* export const config = {
    matcher: "/profile",
} */