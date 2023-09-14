import Link from "next/link";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
export default async function PaginationBar({href, page, pageCount}) {

   return ( 
    <div className="flex gap-2 pb-3">
        <PaginationLink  className="text-slate-100" href={`${href}?page=${page - 1}`}
        enabled={(page > 1)}>
            <ChevronDoubleLeftIcon className="h-5 w-5"/>
            <span className="sr-only">Prev Page</span>
        </PaginationLink>
        <span className="font-bold font-orbitron text-slate-100">Page {page} of {pageCount}</span>
        <PaginationLink className="text-slate-100" href={`${href}?page=${page + 1}`}
        enabled={(page < pageCount)}>
            <ChevronDoubleRightIcon className="h-5 w-5"/>
            <span className="sr-only" >Next Page</span>
        </PaginationLink>
    </div> 
   );
}

function PaginationLink({children, enabled, href}) {
    if (!enabled) {
        return  (
            <span href={href}
            className="hidden">
                {children}
            </span>
        );
    }
    
    return  (
        <Link href={href}
        className="border rounded text-slate-300 text-sm
        hover:bg-slate-100 hover:text-slate-500">
            {children}
        </Link>
    );
}