"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ children, href, prefetch}) {
    const pathName = usePathname();
    if (pathName == href) {
        return (
            <span
            className="font-bold font-orbitron text-slate-100">
            {children}
            </span>
        );
    }
    return (
        <Link href={href} prefetch={prefetch}
        className="font-bold font-orbitron text-slate-100 hover:underline">
        {children}
        </Link>
    );
}