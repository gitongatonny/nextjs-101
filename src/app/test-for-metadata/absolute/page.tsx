//Absolute metadata will override any parent metadata rules.

import { Metadata } from "next";


export const metadata: Metadata = {
    title: {
        absolute: "Fixed Title",
},
    description: "Absolute Descriptions in Next.js",
};


export default function Absolute() {
    return <h1>This is a Sample Page</h1>;
    <h4>We are testing default metadata</h4>
};