//Counter page with metadata but imports Counter since it uses 'use client' directive (2 files linked)
import { Counter } from "./counter";

//Metadata will work since it's separate from 'use client' directive
export const metadata = {
    title: "Counter NextJS",
};

export default function CounterPage() {
    return <Counter />;

}