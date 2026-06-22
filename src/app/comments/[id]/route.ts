//Import the data array
import { comments } from "../data";

//Handler receives the unused requests & context containing params as a promise
export async function GET (
    _request: Request, 
    {params}: { params: Promise<{id: string}> }
) {
    //Await the URL id
    const { id } = await params;
    //Parse dynamic ID, find the comment and return it
    const comment = comments.find((comment) => comment.id === parseInt(id));
    return Response.json(comment);
}