import Link from "next/link";

export default function Navbar() {
   return ( 
   <nav>
        <ul className='flex gap-2'>  
            <li>
                <Link href="/"
                className="font-bold font-orbitron text-slate-100 hover:underline">Home</Link>
            </li>
            <li className="ml-auto">
                <Link href="/reviews"
                className="font-bold font-orbitron text-slate-100 hover:underline">Reviews</Link>
            </li>
            <li>
                <Link href="/about" 
                className="font-bold font-orbitron text-slate-100 hover:underline"
                prefetch={false}>About</Link>
            </li>
        </ul>
    </nav>
   );
}