"use client";

import { useState } from "react";

export const NavSearch = () => {
    console.log("NavSearch Rendered");
    const [search, setSearch] = useState("");
    return (
        <div>
            <input type="text" placeholder="Search" />
        </div>
    );
};