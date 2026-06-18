//Define it as a client component
"use client"

//Error msg in prod build - passed from page.tsx for 'dynamism'
export default function ErrorBoundary({ error }: {
    error: Error
}) {
    return <div> <br /> {error.message} </div>;
}