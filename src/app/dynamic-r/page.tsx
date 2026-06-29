import {cookies} from "next/headers";

export default async function DynamicR(){
    const cookieStore = await cookies();
    const theme = cookieStore.get("theme");
    console.log(theme);
    console.log("About Server Component");
    return <h1>Dynamic Rendering { new Date().toLocaleTimeString()}</h1>;
}