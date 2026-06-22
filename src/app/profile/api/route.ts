// Basic Route Handler Organization - place it in an 'api' folder to prevent it from taking precedence over the page.tsx file in the same folder.

export async function GET(){
    return new Response("Profile Data");
}