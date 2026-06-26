export const dynamic = "force-static"; //Caching
export const revalidate = 10; //cache is refreshed every 10 seconds

//simple return current time Fn
export async function GET(){
    return Response.json({ time: new Date().toLocaleTimeString() });
}