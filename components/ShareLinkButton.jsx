"use client";

import { LinkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function ShareLinkButton() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText(window.location.href)
        setClicked(true);
        setTimeout(() => setClicked(false), 1500);
    };

    return (
        // Client Function onClick \\
        <button onClick={handleClick}
        className="border flex gap-1  items-center p-2 rounded text-slate-100 text-sm
                 hover:bg-teal-800 hover:text-slate-300">
        <LinkIcon className="h-4 w-4"/>
        {clicked ? "Link copied!" : "Share Link"}
        </button>
    );
}