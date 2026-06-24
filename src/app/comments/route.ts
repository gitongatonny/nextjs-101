// Route handler to define and export the GET handler function

//Import comment data
import { NextRequest } from "next/server";
import { comments } from "./data"; 

// GET Fn returns comments array as a JSON response
export async function GET(request: NextRequest) {

    // URL Query (Search Parameters)
    const searchParams = request.nextUrl.searchParams; //get all quary parameters
    const query = searchParams.get("query"); //get specific param
    //get filtered comments if any
    const filteredComments = query ? comments.filter((comment) => comment.text.includes(query)) : comments;
    return Response.json(filteredComments);
} 

// POST fn - handles incoming data and creates a new comment
export async function POST(request: Request) {
    const comment = await request.json();

    //Create new comment and generate new id automatically
    const newComment = {
        id: comments.length + 1,
        text: comment.text,
    };
    comments.push(newComment); //temp in-memory array
    return new Response(JSON.stringify(newComment), {
        headers: { "Content-Type": "application/json" },
        status: 201,
    });
}