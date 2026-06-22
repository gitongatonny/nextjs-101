// Route handler to define and export the GET handler function

import { comments } from "./data"; //import comment data

// GET Fn returns comments array as a JSON response
export async function GET() {
    return Response.json(comments);
} 