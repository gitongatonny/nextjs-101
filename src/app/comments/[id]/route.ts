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


//PATCH

// PATCH handler Fn
export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> } //params is a Promise
  ) {
    //Await the dynamic route param
    const { id } = await params;
  
    //Parse JSON body from the request
    const body = await request.json();
    const { text } = body; //Extract only the field(s) to update
  
    // Find the index of the matching comment (id is a string, compare as int)
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
  
    //Mutate the comment in-memory (no DB — changes lost on restart)
    comments[index].text = text;
  
    //Return the updated comment as JSON response (200 OK by default)
    return Response.json(comments[index]);
  }



//DELETE

//Delete Handler Fn
export async function DELETE(
    _request: Request,   //Unused                                
    { params }: { params: Promise<{ id: string }> }     
  ) {
    // Await dynamic route param
    const { id } = await params;
  
    // Find the index of the comment to delete (id is string, convert to int)
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
  
    // Save reference BEFORE deleting — so it can be returned
    const deletedComment = comments[index];
  
    // Remove 1 item at the found index (mutates array in-memory)
    comments.splice(index, 1);
  
    // Return the deleted comment as confirmation (200 OK by default)
    return Response.json(deletedComment);
  }
  