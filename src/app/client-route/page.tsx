"use client";

//server only enforcement
import "server-only";

//Import Server fn
import { serverSideFunction } from "@/utils/server-utils";


export default function ClientRoutePage() {
    const result = serverSideFunction();
    return <h1>Client Route {result} </h1>;
}