// Dynamic routing with 'catch all segments'
export default async function DocsPage({
    params,
}: {
    
    params: Promise<{ slug: string[] }>;
}) {

    const { slug } = await params;

    // 2 segments (paths), display the feature and concept
    if (slug?.length === 2) {
        return <h1>This is the Docs Page for feature {slug[0]} and concept {slug[1]}</h1>;
    }

    // 1 segment (path), display the feature only
    else if (slug?.length === 1) {
        return <h1>This is the Docs Page for feature {slug[0]}</h1>;
    }

    // No segments, display a default message (main docs page)
    return <h1>This is the Docs Page</h1>;

}

//To include the root 'docs' page add a second pair of square brackets to the 'slug' path e.g., from [...slug] to [[...slug]]