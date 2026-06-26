export const dynamic = "force-static"; //Caching

export async function GET() {
    //Static Data - should come from a DB
    const categories = [
        {id: 1, name: "Electronics" },
        {id: 2, name: "Books" },
        {id: 3, name: "Clothing" },
        {id: 4, name: "Home & Garden" },
    ];

    return Response.json(categories);
}